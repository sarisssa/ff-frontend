import { getTimeRemaining } from "@/lib/get-time-remaining";
import { Petition } from "@/lib/types";
import Image from "next/image";
import { ImPriceTags } from "react-icons/im";
import { PiGlobeHemisphereEastThin, PiScrollDuotone } from "react-icons/pi";
import Button from "../ui/button";
import { PetitionActionButtons } from "./petition-action-buttons";
// import {LuCalendarClock} from "react-icons/lu"

interface Props {
  petition: Petition;
}

export default function PetitionContainer({ petition }: Props) {
  const {
    creator,
    message,
    location,
    petitionee,
    description,
    fee,
    publicationDate,
    deadline,
    coverImage,
  } = petition;

  return (
    <div className="card w-full border border-slate-300 bg-ff-gray text-primary-content">
      <div className="card-body px-4 pt-6 pb-1">
        <div className="card-header text-sm flex gap-2">
          <div className="w-10 h-10 relative">
            <Image
              className="rounded-full"
              src={creator.profilePic}
              fill
              alt="Profile Picture"
            ></Image>
          </div>

          <div>
            <span>
              <strong>{creator.name}</strong> launched a petition
            </span>
            <span>
              <div className="flex items-center gap-1">
                {publicationDate.toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
                <span>•</span>
                <PiGlobeHemisphereEastThin />
                {location}
              </div>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p>{message}</p>
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
        </div>
        <div className="card-actions flex justify-between">
          <PetitionActionButtons />
        </div>
      </div>
    </div>
  );
}
