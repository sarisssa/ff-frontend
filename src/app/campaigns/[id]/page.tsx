import { getCampaignDetails } from "@/clients/petitions/get-campaign-details";
import PetitioneeDetails from "@/components/petitionee-details";
import Button from "@/components/ui/button";
import { SeeMore } from "@/components/ui/see-more";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { PiScrollDuotone } from "react-icons/pi";
import { SlSpeech } from "react-icons/sl";
import { TbLocationFilled, TbTargetArrow } from "react-icons/tb";

interface Props {
  params: { id: string };
}

export default async function PetitionDetails({ params: { id } }: Props) {
  const petitionDetails = await getCampaignDetails(id);

  if (!petitionDetails) return <p>This petition does not exist</p>;

  type detailTab = "Details" | "Reposts" | "Comments" | "Activity";

  const petitionDetailTabs: detailTab[] = [
    "Details",
    "Reposts",
    "Comments",
    "Activity",
  ];

  const {
    creator,
    petitionee,
    description,
    fee,
    deadline,
    coverImage,
    location,
    publicationDate,
    signatoryPreviewList,
    currentSignatories,
    totalSignatories,
    currentFundedAmount,
    goalAmount,
    nPetitionReports,
    nPetitionComments,
    nPetitionActivities,
  } = petitionDetails;

  const signatories = signatoryPreviewList.map((x) => x.name).join(", ");

  return (
    <div>
      <PetitioneeDetails
        petitionee={petitionee}
        description={description}
        fee={fee}
        deadline={deadline}
        coverImage={coverImage}
      />
      <div className="petition-details px-3">
        <div>
          <span className="flex gap-1 items-center">
            <div className="text-2xl">
              <PiScrollDuotone />
            </div>
            <strong>{`${currentSignatories}`}</strong>
            <span>of</span>
            <strong>{`${totalSignatories}`}</strong>
            <span>Signatures Available</span>
          </span>
        </div>
        <div className="flex items-center gap-1">
          <MdLocationOn />
          <span>{location}</span>
          <span>
            Created:
            {publicationDate.toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <div className="flex gap-4 my-3">
          <div className="flex flex-grow-1 flex-shrink-0">
            {signatoryPreviewList.map(({ profilePic, name }, idx) => (
              <Image
                className="rounded-full aspect-square -mr-3"
                src={profilePic}
                key={idx}
                width={40}
                height={40}
                alt={`Profile picture of ${name}`}
              />
            ))}
            <div className="rounded-full border-2 border-ff-dark-gray bg-ff-gray w-10 h-10 aspect-square flex items-center justify-center">
              +{currentSignatories - signatoryPreviewList.length}
            </div>
          </div>
          <div className="text-xs flex items-center">{`Signed by ${signatories}, and ${
            currentSignatories - signatoryPreviewList.length
          } others`}</div>
        </div>
        <div>
          <span className="flex items-center gap-1">
            <div className="text-3xl">
              <TbTargetArrow />
            </div>
            <strong>{`$${currentFundedAmount.toLocaleString()}`}</strong>
            <span>{`of $${goalAmount.toLocaleString()} Petition Goal`}</span>
          </span>
          <progress
            className="progress"
            value={currentFundedAmount}
            max={50000}
          />
        </div>
        <div className="border px-2 pt-2 mb-5">
          <h1 className="text-xl	font-semibold">About the Campaign</h1>
          <span>
            {`Created by: `}
            <span>{creator.name}</span>
          </span>
          <SeeMore>{description}</SeeMore>
        </div>
      </div>
      <div className="flex justify-around gap-1">
        <Button className="flex justify-center items-center basis-[65%] gap-1">
          <SlSpeech />
          Join this Campaign
        </Button>
        <Button
          className="flex justify-center items-center basis-1/4 gap-1"
          type={"border"}
        >
          <TbLocationFilled /> Share
        </Button>
      </div>
    </div>
  );
}
