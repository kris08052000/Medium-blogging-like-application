import { ChangeEvent, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { SignupInput } from "@kris08/medium-common"
import axios from "axios"
import {BACKEND_URL} from "../config"

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInput, setpostInput] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })

    async function sendRequest(){
      try{
        const response =  await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInput);
        const jwt = response.data;
        localStorage.setItem('token',jwt);
        navigate("/blogs");
      }catch(e){
        alert("Error while signing up")
      }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-justify text-3xl font-bold flex justify-center">
                        {type === "signup" ? "Create an account" : "Login"}
                    </div>
                    <div className=" text-slate-400 flex justify-center">
                        {type === "signin" ? "Don't have an account" : "Already have an account?"} <Link className="pl-2 underline" to={ type === "signin" ? "/signup" : "/signin"}>{type === "signin" ? "sign up" : "sign in"}</Link>
                    </div>
                </div>

                <div className="pt-6">
                    {type === "signup" ? <LabelledInput label="Name" placeholder="Harkirat singh..." onChange={(e) => {
                        setpostInput({
                            ...postInput,
                            name: e.target.value
                        })
                    }} /> : null
                    }
                    <LabelledInput label="Email" placeholder="Harkiratsingh@gmail.com..." onChange={(e) => {
                        setpostInput({
                            ...postInput,
                            email: e.target.value
                        })
                    }} />
                    <LabelledInput label="Password" placeholder="1234567" onChange={(e) => {
                        setpostInput({
                            ...postInput,
                            password: e.target.value
                        })
                    }} />
                    <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
                </div>
            </div>
        </div>
    </div>
}

interface LabelInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({ label, placeholder, onChange }: LabelInputType) {
    return <div>
        <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white pt-2">{label}</label>
        <input onChange={onChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
    </div>
}