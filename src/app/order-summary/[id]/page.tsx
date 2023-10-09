"use client";

import Button from "@/components/ui/button";
import { useState } from "react";
import { AiOutlineWallet } from "react-icons/ai";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { BsFillTagsFill } from "react-icons/bs";
import { CiCreditCard2 } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";

export default function OrderSummary() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onHandlePayment = () => {
    //Payment logic here
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  return (
    <div className="flex flex-col px-4">
      <div className="flex items-center">
        <IoMdArrowBack />
        <h1 className="text-[40px] font-bold mb-5">Order Summary</h1>
      </div>
      <div className="flex gap-5">
        <div id="image" className="h-[110px] w-[30%]">
          <img
            className="h-[100%] w-[100%] object-cover"
            src="https://placehold.co/500x145"
            alt=""
          />
        </div>
        <div className="flex flex-col w-[70%] justify-center">
          <div className="flex justify-between">
            <div className="font-bold flex items-center gap-1">
              LarryJune
              <BiSolidBadgeDollar />
            </div>
            <span>Pencil icon</span>
          </div>
          <p>Meet and Greet in Oakland</p>
          <div className="font-bold flex items-center gap-1">
            <BsFillTagsFill /> $200
          </div>
        </div>
      </div>
      <div className="flex justify-between font-bold my-5">
        <div>TOTAL</div>
        <div>$200</div>
      </div>
      <Button className="text-xl text-center mb-3">Apply Pay</Button>
      <Button className="text-xl text-center mb-3">Google Pay</Button>
      <form action="">
        <label htmlFor="card-holder">Card holder</label>
        <input
          className="block w-[100%] bg-ff-gray p-3 mt-1 mb-5 font-medium"
          id="card-holder"
          type="text"
          placeholder="Your name"
        />
        <label htmlFor="card-holder">Card number</label>
        <CiCreditCard2 />
        <input
          className="block w-[100%] bg-ff-gray p-3 mt-1 mb-5 font-medium"
          id="card-holder"
          type="number"
          placeholder="XXXX XXXX XXXX XXXX"
        />
        <div className="flex gap-4">
          <div className="flex flex-col w-[50%]">
            <span>Valid until</span>
            <input
              className="block w-[100%] bg-ff-gray p-3 mt-1 mb-5 font-medium"
              type="number"
              placeholder="MM/YYYY"
            />
          </div>
          <div className="flex flex-col w-[50%]">
            <span>Security Code</span>
            <input
              className="block w-[100%] bg-ff-gray p-3 mt-1 mb-5 font-medium"
              type="number"
              placeholder="***"
            />
          </div>
        </div>
        <div className="mb-1">
          <input className="inline-block" type="checkbox" />
          <span className="inline-block ml-2">
            Accept the Terms and Conditions{" "}
          </span>
        </div>
        <div className="mb-3">
          <input className="inline-block" type="checkbox" />
          <span className="inline-block ml-2">
            Use as default payment method{" "}
          </span>
        </div>
        <Button className="text-xl flex justify-center items-center gap-1">
          <AiOutlineWallet />
          Pay $200 to Join Campaign
        </Button>
      </form>
    </div>
  );
}
