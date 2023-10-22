"use client";

import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { AiOutlineWallet } from "react-icons/ai";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { BsFillTagsFill } from "react-icons/bs";
import { CiCreditCard2 } from "react-icons/ci";
import { IoChevronBackCircleOutline } from "react-icons/io5";

export default function OrderSummary() {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onHandlePayment = () => {
    //Payment logic here
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  return (
    <div className="flex flex-col px-4">
      <div className="flex items-center mb-5 text-[30px] gap-2">
        <IoChevronBackCircleOutline onClick={() => router.back()} />
        <h1 className="font-bold">Order Summary</h1>
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
      <form action="">
        <label htmlFor="card-holder">Card holder</label>
        <input
          className="block w-[100%] bg-ff-gray p-3 mt-1 mb-5 font-medium"
          id="card-holder"
          type="text"
          placeholder="Your name"
        />
        <label htmlFor="card-holder">Card number</label>
        <div className="bg-ff-gray flex items-center gap-1 px-4 py-3 mt-1 mb-5">
          <CiCreditCard2 />
          <input
            className="block w-[100%] bg-transparent font-medium"
            id="card-holder"
            type="number"
            placeholder="XXXX XXXX XXXX XXXX"
          />
        </div>
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
            Accept the <span className="underline">Terms and Conditions</span>{" "}
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
