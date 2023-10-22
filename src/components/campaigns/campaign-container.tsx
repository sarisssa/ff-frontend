import { Petition } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { PiGlobeHemisphereEastThin } from "react-icons/pi";
import PetitioneeDetails from "../petitionee-details";
import { PetitionActionButtons } from "./petition-action-buttons";
// import {LuCalendarClock} from "react-icons/lu"

interface Props {
  petition: Petition;
}

export default function CampaignContainer({ petition }: Props) {
  const {
    id,
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
    <Link
      href={`/petitions/${id}`}
      className="card w-full border border-slate-300 bg-ff-gray text-primary-content"
    >
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
          <PetitioneeDetails
            petitionee={petitionee}
            description={description}
            fee={fee}
            deadline={deadline}
            coverImage={coverImage}
          />
        </div>
        <div className="card-actions flex justify-between">
          <PetitionActionButtons />
        </div>
      </div>
    </Link>
  );
}
