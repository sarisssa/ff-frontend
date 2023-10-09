"use client";

import Button from "@/components/ui/button";
import { useState } from "react";

export default function ExperienceNFT() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  const openModal = () => {
    console.log("MODAL OPEN");
    setIsModalOpen(true);
    setCurrentStep(1); // Reset to the first step when opening the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    // You can submit data or perform other actions
    closeModal(); // Close the modal after submission
  };

  return (
    // <div
    //   id="overlay"
    //   className="fixed flex justify-center items-center inset-0 bg-black/[0.4]"
    //   onClick={() => setIsModalOpen(false)}
    // >
    <div id="experience-meta-container" className="flex flex-col">
      <div id="user-name"></div>
      <div id="campaign-meta"></div>
      {isModalOpen && (
        <dialog className="z-10" open>
          <div>
            {currentStep === 1 && (
              <div className="flex flex-col px-3">
                <span onClick={closeModal}>Back Button</span>
                <h1 className="font-bold">Voting Question #1</h1>
                <span>Select one</span>
                <label>
                  <div className="flex justify-between">
                    <span>Option One</span>
                    <input type="radio" name="option-1" />
                  </div>
                </label>
                <label>
                  <div className="flex justify-between">
                    <span>Option Two</span>
                    <input type="radio" name="option-1" />
                  </div>
                </label>
                <label>
                  <div className="flex justify-between">
                    <span>Option Three</span>
                    <input type="radio" name="option-1" />
                  </div>
                </label>
                <Button onClick={handleNextStep}>Next</Button>
                <Button type="border" onClick={handleNextStep}>
                  Skip
                </Button>
              </div>
            )}
            {currentStep === 2 && (
              <div className="flex flex-col">
                <h1>Voting Question #2</h1>
                <span>Select up to 2</span>
                <label>
                  <input type="checkbox" name="option1" />
                  Option 1
                </label>
                <label>
                  <input type="checkbox" name="option1" />
                  Option 2
                </label>
                <label>
                  <input type="checkbox" name="option1" />
                  Option 3
                </label>
                <Button onClick={handleNextStep}>Next</Button>
                <Button type="border" onClick={handlePrevStep}>
                  Back
                </Button>
              </div>
            )}
            {currentStep === 3 && (
              <div className="flex flex-col">
                <h1>Voting Question #3</h1>
                <span>Use slider to select range</span>
                <h2>Range Selector</h2>
                <div className="flex justify-between">
                  <input
                    className="w-[15vw] border border-black"
                    type="number"
                  />
                  <input
                    className="w-[15vw] border border-black"
                    type="number"
                  />
                </div>
                <Button onClick={handleNextStep}>Finish</Button>
                <Button type="border" onClick={handlePrevStep}>
                  Back
                </Button>
              </div>
            )}
            {currentStep === 4 && (
              <div className="flex flex-col">
                <h1>Voting Submitted!</h1>
                <p>
                  Thanks for voting! Looking forward to seeing you at the event!
                </p>
              </div>
            )}
          </div>
        </dialog>
      )}
      <Button onClick={openModal}>Vote to Customizie Your Experience</Button>
      <Button>Redeem Access to This Experience</Button>
    </div>
    // </div>
  );
}
