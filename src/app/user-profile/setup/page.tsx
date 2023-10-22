"use client";

import Button from "@/components/ui/button";
import { useState } from "react";
import { IoChevronBackOutline, IoPersonCircle } from "react-icons/io5";

export default function ProfileSetupPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-3 mb-10">
        <IoChevronBackOutline className="text-3xl" />
        <h2 className="font-bold text-xl">My profile</h2>
        <span>Log out</span>
      </div>
      <div className="flex flex-col justify-center items-center mb-6">
        <IoPersonCircle />
        <span className="text-sm">Edit picture or avatar</span>
      </div>
      <div className="flex flex-col px-3 gap-4">
        <div className="flex flex-col ">
          {" "}
          <span className="font-bold">Select a username</span>
          <input className="bg-ff-gray px-3 py-2" type="text" />
        </div>
        <div className="flex flex-col">
          {" "}
          <span className="font-bold">Phone</span>
          <input className="bg-ff-gray px-3 py-2" type="number" />
        </div>
        <div className="flex flex-col">
          {" "}
          <span className="font-bold">Birthday</span>
          <input
            className="bg-ff-gray px-3 py-2"
            type="text"
            placeholder="Set birthday"
          />
        </div>
        <div className="flex flex-col mb-10">
          {" "}
          <span className="font-bold">Bio</span>
          <input
            className="bg-ff-gray h-[6rem] px-3 py-5"
            type="text"
            placeholder="Tell others about you"
          />
        </div>
        <Button className="mb-5 width-[85%]">Save Changes</Button>
      </div>
      <div className="flex justify-center gap-2">
        <div
          className={`w-[0.7rem] h-[0.7rem] rounded-full border border-ff-border-dark-gray ${
            currentStep === 1 ? "bg-orange-900" : ""
          }}`}
        ></div>
        <div className="w-[0.7rem] h-[0.7rem] rounded-full border border-ff-border-dark-gray"></div>
      </div>
    </div>
  );
}
