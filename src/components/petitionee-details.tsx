import { getTimeRemaining } from "@/lib/get-time-remaining";
import { Petition } from "@/lib/types";
import Image from "next/image";
import { ImPriceTags } from "react-icons/im";
import { PiScrollDuotone } from "react-icons/pi";
import Button from "./ui/button";

type Props = Pick<
  Petition,
  "coverImage" | "petitionee" | "description" | "fee" | "deadline"
>;

export default function PetitioneeDetails({
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
        <div className="w-24 h-24 relative flex-grow flex-shrink-0">
          <Image
            className="rounded-full"
            src={petitionee.profilePic}
            fill
            alt="Profile Picture"
          ></Image>
        </div>
        <div>
          <span className="font-bold">{petitionee.name}</span>
          <span className="block mb-2">{description}</span>
          <span className="flex justify-between">
            <span className="flex items-center gap-1">
              <ImPriceTags />
              {`$${fee}`}
            </span>
            <span>{getTimeRemaining(deadline)}</span>
          </span>
          <div className="flex items-center gap-2 justify-between text-[.8rem]">
            <Button type="secondary">
              <div className="text-xl">
                <PiScrollDuotone />
              </div>
              Following
            </Button>
            <Button>
              <div className="text-xl">
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
