import React from 'react'
import SubHeading from "../Components/SubHeading"
import Heading from "../Components/Heading"
import InputBox from "../Components/InputBox"
import Button from "../Components/Button"
import BottomWarning from "../Components/BottomWarning"

const SignIn = () => {
  return <div className="bg-slate-300 h-screen flex justify-center">
  <div className="flex flex-col justify-center">
    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      <Heading label={"Sign in"} />
      <SubHeading label={"Enter your credentials to access your account"} />
      <InputBox placeholder="Enter your mail" label={"Email"} />
      <InputBox placeholder="Enter your Password" label={"Password"} />
      <div className="pt-4">
        <Button label={"Sign in"} />
      </div>
      <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
    </div>
  </div>
</div>
}

export default SignIn