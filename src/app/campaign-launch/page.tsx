import Button from "@/components/ui/button";

export default function CampaignLaunchPage() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col items-center py-[16rem]">
          {" "}
          <div>Image</div>
          <h1 className=" text-5xl font-bold mb-4">Welcome!</h1>
          <p className="text-center text-lg">
            Create your first campaign. Ask brands, artists, and creators to do
            <span className="text-lg italic">(insert cool shit).</span>
          </p>
          <p className="font-bold italic">You own the culture now.</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="max-w-[90%]">Get Started</Button>
      </div>
    </>
  );
}
