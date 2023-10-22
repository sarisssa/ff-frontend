"use client";

import Button from "@/components/ui/button";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

export default function VerifyEmailPage() {
  const inputRefIndex = [0, 1, 2, 3, 4];
  const [verificationCode, setVerificationCode] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
  ]);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    if (isNaN(Number(value))) {
      return;
    }

    const updatedCode = [...verificationCode];
    updatedCode[index] = value;
    setVerificationCode(updatedCode);

    if (value !== "" && index < 4 && inputRefs[index + 1].current) {
      inputRefs[index + 1].current.focus();
    }

    if (index === 4 && updatedCode.every((digit) => digit !== "")) {
      updatedCode.join("");
    }
  };
  return (
    <div className="flex flex-col items-center mt-16">
      <div className="flex flex-col items-center mb-8">
        <Image src="/images/ff-logo.png" width={50} height={50} alt="FF Logo" />
        <h1 className="text-3xl font-bold mb-3">Verify your email</h1>
        <p className="px-6 text-sm text-center">
          Please enter the verification code{" "}
          <span className="font-bold">we sent to your email address</span> to
          complete the verification process.
        </p>
      </div>
      <div className="flex relative mb-[20rem] gap-4">
        {inputRefIndex.map((digit, index) => (
          <input
            className="w-9 h-8 pl-3 border border-ff-border-dark-gray"
            key={index}
            ref={inputRefs[index]}
            type="text"
            value={verificationCode[index]}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>
      <Button type={"border"} className="w-[22rem]">
        Resend the code
      </Button>
    </div>
  );
}
