import { Heading } from "../components/Heading"
import { InputBox } from "../components/Inputbox"
import { Subheading } from "../components/Subheading"
import { Button } from "../components/Button"
import { Buttonwarning } from "../components/Buttonwarning"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export function Signup() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign up"} />
                <Subheading label={"Enter your infromation to create an account"} />
                <InputBox onChange={e => {
                    setFirstName(e.target.value);
                }} placeholder="abcd" label={"First Name"} />

                <InputBox onChange={e => {
                    setLastName(e.target.value);
                }} placeholder="efgh" label={"Last Name"} />

                <InputBox onChange={e => {
                    setUsername(e.target.value);
                }} placeholder="abc@gmail.com" label={"Email"} />
                <InputBox onChange={e => {
                    setPassword(e.target.value);
                }} placeholder="123456" label={"Password"} />
                <div className="pt-4">
                    <Button onClick={async () => {
                        try {
                            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                                username,
                                password,
                                firstName,
                                lastName
                            })

                            localStorage.setItem("token", response.data.token)
                            navigate("/dashboard")
                        } catch (error) {
                            alert("Email already taken")
                        }

                    }

                    } label={"Sign up"} />

                </div>
                <Buttonwarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    </div>
}
