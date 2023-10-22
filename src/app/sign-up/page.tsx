"use client";

import Button from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import {
  IoEyeOffOutline,
  IoEyeOutline,
  IoPersonOutline,
} from "react-icons/io5";

export default function SignUpPage() {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mb-8">
        <Image src="/images/ff-logo.png" width={50} height={50} alt="FF Logo" />
        <h1 className="text-2xl font-bold mb-3">Welcome to FANFUNDR</h1>
        <span>Create your account</span>
      </div>
      <div className="flex flex-col w-[85%] gap-4 mb-3">
        <div className="flex items-center relative text-lg">
          <IoPersonOutline className="absolute left-[5px]" />
          <input
            className="p-2 pl-6  border w-[100%] border-ff-border-dark-gray"
            type="text"
          />{" "}
        </div>
        <div className="flex items-center relative">
          <AiOutlineMail className="absolute left-[5px]" />
          <input
            className="p-2 pl-6 border w-[100%] border-ff-border-dark-gray"
            type="text"
          />
        </div>
        <div className="flex items-center relative text-lg">
          <AiOutlineLock className="absolute left-[5px]" />
          <input
            className="p-2 pl-6  border w-[100%] border-ff-border-dark-gray"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
          />
          {showPassword ? (
            <IoEyeOutline
              className="absolute right-[5px]"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <IoEyeOffOutline
              className="absolute right-[5px]"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
      </div>
      <div className="flex gap-2 mr-16 mb-4">
        <input type="checkbox" />
        <span>I agree with the Terms & Conditions</span>
      </div>
      <Button className="w-[85%] mb-5">Continue</Button>
      <span>Already have an account? Sign in</span>
    </div>
  );
}
