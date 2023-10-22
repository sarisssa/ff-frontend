import { getTimeRemaining } from "@/lib/get-time-remaining";
import { Petition } from "@/lib/types";
import Image from "next/image";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { ImPriceTags } from "react-icons/im";
import { PiScrollDuotone } from "react-icons/pi";
import Button from "./ui/button";

type Props = Pick<
  Petition,
  "coverImage" | "petitionee" | "description" | "fee" | "deadline"
>;

export default function CampaignDetails({
  coverImage,
  petitionee,
  description,
  fee,
  deadline,
}: Props) {
  return (
    <>
      <div className="relative w-full h-48 rounded overflow-hidden">
        <Image
          src={coverImage}
          fill
          objectFit="cover"
          alt="Petition Picture"
        ></Image>
      </div>

      <div className="flex items-center gap-2 bg-white rounded p-2">
        <div className="w-20 h-20 relative flex-shrink-0">
          <Image
            className="rounded-full"
            src={petitionee.profilePic}
            fill
            alt="Profile Picture"
          ></Image>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="font-bold">{petitionee.name}</span>
            <BiSolidBadgeDollar />
          </div>
          <span className="block mb-2">{description}</span>
          <span className="flex justify-between">
            <span className="flex items-center gap-1">
              <ImPriceTags />
              {`$${fee}`}
            </span>
            <span>{getTimeRemaining(deadline)}</span>
          </span>
          <div className="flex items-center gap-2 justify-between text-[.8rem]">
            <Button
              className="flex items-center justify-center gap-2"
              type="secondary"
            >
              <div className="text-xl inline-block">
                <PiScrollDuotone />
              </div>
              Following
            </Button>
            <Button className="flex items-center justify-center gap-2">
              <div className="text-xl inline-block">
                <PiScrollDuotone />
              </div>
              Join Petition
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
