import { getCampaignDetails } from "@/clients/petitions/get-campaign-details";
import Button from "@/components/ui/button";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";
import { MdPeopleOutline } from "react-icons/md";
import { TbLocationFilled } from "react-icons/tb";

interface Props {
  params: { id: string };
}

export default async function PaymentSuccessful({ params: { id } }: Props) {
  const petitionDetails = await getCampaignDetails(id);

  if (!petitionDetails) return <p>This petition does not exist</p>;

  const { signatoryPreviewList } = petitionDetails;

  return (
    <>
      <div id="image" className="h-[500px] w-full">
        <img
          className="h-full w-full object-cover"
          src="https://placehold.co/500x145"
          alt=""
        />
      </div>
      <div className="px-4">
        <div className="flex flex-col justify-center items-center border border-ff-border-light -mb-[80px] -top-[100px] relative bg-white">
          <div>
            <div className="flex flex-col items-center text-center border-b border-ff-border-light p-3">
              <BsCheckCircle />
              <h3 className="font-bold text-2xl">Signature successful!</h3>
            </div>
            <div className="flex justify-center border-b border-ff-border-light p-3 gap-3">
              <div id="image" className="h-[80px] w-[30%]">
                <img
                  className="h-[100%] w-[100%] object-cover"
                  src="https://placehold.co/500x145"
                  alt=""
                />
              </div>
              <div className="flex flex-col w-[70%] justify-center">
                <h3 className="font-bold">LarryJune</h3>
                <span>Meet & Greet in Oakland, CA</span>
                <span>Event Date & Time: TBD</span>
              </div>
            </div>
            <div className="border-b border-ff-border-light p-3">
              Onboarding instructions for what user should do next.
            </div>
          </div>

          <div className="flex justify-between gap-5">
            <span className="font-bold text-2xl">You were signature</span>{" "}
            <span className="font-bold text-2xl">#203</span>
          </div>
          <div className="flex justify-between max-w-[300px] w-[100%] p-3">
            <div className="flex">
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
            </div>
            <div className="text-xs flex items-center">
              Signed by others before you
            </div>
          </div>
          <div className="p-3">
            {/* <div>
              <div className="flex items-center gap-1">
                <BsPatchCheck />
                <span className="font-bold">48% </span>of the way to
                <span className="font-bold italic">micro </span>
                influencer!
              </div>
              <progress className="progress" value={48} max={100} />
            </div> */}
          </div>
        </div>
        <Button className="flex items-center justify-center text-lg text-center mb-6 gap-1">
          <MdPeopleOutline />
          Invite Others to Join the Campaign
        </Button>
        <Button
          type={"border"}
          className="flex items-center justify-center text-lg text-center mb-4 gap-1"
        >
          <TbLocationFilled />
          Share Your Campaign Pass on Social
        </Button>
      </div>
    </>
  );
}
