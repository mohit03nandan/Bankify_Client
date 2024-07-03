import React ,{useState}from 'react'
import SubHeading from "../Components/SubHeading"
import Heading from "../Components/Heading"
import InputBox from "../Components/InputBox"
import Button from "../Components/Button"
import BottomWarning from "../Components/BottomWarning"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const SignIn = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return <div className="bg-slate-300 h-screen flex justify-center">
  <div className="flex flex-col justify-center">
    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      <Heading label={"Sign in"} />
      <SubHeading label={"Enter your credentials to access your account"} />
      <InputBox placeholder="Enter your mail" label={"Email"} onChange={(e)=>setUsername(e.target.value)}  />
      <InputBox placeholder="Enter your Password" label={"Password"}  onChange={(e)=>setPassword(e.target.value)} />
      <div className="pt-4">
        <Button label={"Sign in"}  onClick={async()=>{
             const response = await axios.post('http://localhost:3003/api/v1/user/signin',{
               username,
               password
             })
             localStorage.setItem("token", response.data.token)
             navigate("/dashboard")
        }} />
      </div>
      <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/"} />
    </div>
  </div>
</div>
}

export default SignIn