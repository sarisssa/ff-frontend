import { getPetitionDetails } from "@/clients/petitions/get-petition-details";
import Button from "@/components/ui/button";
import Image from "next/image";

//Background Approach: user Profile

//Object Cover - Order Summary

interface Props {
  params: { id: string };
}

export default async function PaymentSuccessful({ params: { id } }: Props) {
  const petitionDetails = await getPetitionDetails(id);

  if (!petitionDetails) return <p>This petition does not exist</p>;

  const { signatoryPreviewList } = petitionDetails;

  return (
    <>
      <div id="image" className="h-[500px] w-[100%]">
        <img
          className="h-[100%] w-[100%] object-cover"
          src="https://placehold.co/500x145"
          alt=""
        />
      </div>
      <div className="px-4 mt-[-100px] bg-white">
        <div className="flex flex-col justify-center items-center border border-ff-dark-gray mb-5">
          <div>
            <div className="text-center border-b border-ff-dark-gray p-3">
              <h3 className="font-bold">Signature successful!</h3>
            </div>
            <div className="flex justify-center border-b border-ff-dark-gray p-3 gap-3">
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

            <div className="border-b border-ff-dark-gray p-3">
              Onboarding instructions for what user should do next.
            </div>
          </div>

          <div className="flex justify-between gap-5">
            <span>You were signature</span> <span>203</span>
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
            <div>48% of the way to micro influencer!</div>
            <div id="progress bar"></div>
          </div>
        </div>
        <Button className="text-xl text-center mb-6">
          Invite Others to Join the Campaign
        </Button>
        <Button type={"secondary"} className="text-xl text-center mb-4">
          Share Your Campaign Pass on Social
        </Button>
      </div>
    </>
  );
}
