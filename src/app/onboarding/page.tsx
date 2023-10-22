"use client";

import Button from "@/components/ui/button";
import Image from "next/image";

import { useState } from "react";

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1); // Initialize the current stage

  const goToNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goBackToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center mt-16">
      <div className="flex flex-col items-center mb-8">
        <Image
          src="https://placehold.co/400x400"
          width={80}
          height={80}
          alt="FF Logo"
        />
      </div>
      <div className="flex flex-col px-4 mb-20 gap-2">
        <h2 className="font-bold text-2xl">Welcome to FANFUNDR</h2>
        <p>
          Connecting consumers and brands for a new type of customer experience.
        </p>
        <ul>
          <li>VP 1</li>
          <li>VP 2</li>
          <li>VP 3</li>
        </ul>
      </div>
      <Button className="w-[22rem]" onClick={goToNextStep}>
        Continue
      </Button>
      {currentStep === 2 || currentStep === 3 ? (
        <Button
          type={"blank"}
          className="w-[22rem]"
          onClick={goBackToPreviousStep}
        >
          Back
        </Button>
      ) : null}
      <div className="flex gap-1">
        <div
          className={`w-[0.7rem] h-[0.7rem] rounded-full border border-ff-border-dark-gray ${
            currentStep === 1 ? "bg-orange-900" : ""
          }}`}
        ></div>
        <div className="w-[0.7rem] h-[0.7rem] rounded-full border border-ff-border-dark-gray"></div>
        <div className="w-[0.7rem] h-[0.7rem] rounded-full border border-ff-border-dark-gray"></div>
      </div>
    </div>
  );
}
