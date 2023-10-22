import { IoPersonCircle, IoPersonOutline } from "react-icons/io5";

import { BsShieldLock } from "react-icons/bs";

import { BiChevronRight } from "react-icons/bi";

import { PiHeadset } from "react-icons/pi";

import Button from "@/components/ui/button";
import { MdPayment } from "react-icons/md";

export default function SettingsPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full items-center py-4 gap-2 bg-ff-settings-gray">
        <IoPersonCircle />
        <h2>Anthony Diaz</h2>
        <span>(929) 617-0714</span>
      </div>
      <div className="flex flex-col w-full mt-6 gap-4">
        <div className="flex items-center justify-evenly">
          <div className="flex items-center gap-2">
            <IoPersonOutline />
            <span>Personal Information</span>
          </div>
          <BiChevronRight />
        </div>
        <div className="flex items-center justify-evenly">
          <div className="flex items-center gap-2">
            <MdPayment />
            <span>Payments Management</span>
          </div>
          <BiChevronRight />
        </div>
        <div className="flex items-center justify-evenly">
          <div className="flex items-center gap-2">
            <BsShieldLock />
            <span>Password & Security</span>
          </div>
          <BiChevronRight />
        </div>
        <div className="flex items-center justify-evenly">
          <div className="flex items-center gap-2">
            <PiHeadset />
            <span>Support</span>
          </div>
          <BiChevronRight />
        </div>
        <div className="flex flex-col justify-center gap-3">
          <Button type="border">Referral Code</Button>
          <Button type="secondary">Log out</Button>
        </div>
      </div>
    </div>
  );
}
