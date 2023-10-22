"use client";

import TabButton from "@/components/ui/tab-button";
import FollowerRow from "@/components/user-profile/follower-row";
import Image from "next/image";
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

import { IoSearchOutline } from "react-icons/io5";

export default function UserProfileFollowers() {
  const [currentTab, setCurrentTab] = useState<"followers" | "following">(
    "followers"
  );

  const [input, setInput] = useState("");

  const names = ["Kiran Glaucus", "Sally Money", "Liam Pham"];

  const filteredFollowers = names.filter((name) =>
    name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between [&>*]:flex-grow [&>*]:basis-0 [&>*]:flex-shrink-0">
        <div>
          <div className="ml-8 text-4xl flex items-center">
            <IoMdArrowBack />
          </div>
        </div>
        <div className="font-bold flex gap-2 justify-center items-center text-xl overflow-visible">
          <Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="Profile picture"
            className="rounded-full max-w-10 max-h-10"
            width={40}
            height={40}
          />
          <span className="whitespace-nowrap">Katie Lee</span>
        </div>
        <div />
      </div>
      <div className="w-full flex justify-center">
        <TabButton
          isSelected={currentTab === "followers"}
          onClick={() => setCurrentTab("followers")}
          indicator={0}
        >
          77 followers
        </TabButton>

        <TabButton
          isSelected={currentTab === "following"}
          onClick={() => setCurrentTab("following")}
        >
          69 following
        </TabButton>
      </div>
      <div className="px-3 bg-ff-light-gray">
        <div className="flex w-full p-2 items-center gap-1 text-lg bg-ff-light-gray">
          <IoSearchOutline className="absolute left-8" />
          <input
            className="w-full p-2 pl-8 bg-ff-gray border-2 border-ff-border-dark-gray"
            placeholder="Search"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="flex justify-between ">
          <span className="font-bold">Sorted by Date followed: Latest</span>
          <p>icon</p>
        </div>
      </div>
      {filteredFollowers.map((name, idx) => (
        <FollowerRow name={name} key={idx} />
      ))}
    </div>
  );
}
