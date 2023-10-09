import Button from "@/components/ui/button";

export default function DepositReviewPage() {
  return (
    <div className="flex flex-col items-center px-3">
      <h1 className="text-2xl font-bold mb-3">
        To launch this campaign you will need to stake $200
      </h1>
      <span className="font-bold relative right-[7.5rem]">
        5438 ****** 0011
      </span>
      <div className="flex flex-col items-center py-10 my-12 w-[50vw] border border-black">
        <span>Amount</span>
        <span className="text-4xl font-bold">$200</span>
      </div>
      <p className="mb-2">
        If your campaign is accepted by the producer, the amount you pay will
        cover the cost of your participation. If your campaign is declined by
        the producer, you will get your money back.
      </p>
      <Button className="text-xl text-center my-8">Continue</Button>
      <Button type={"border"} className="text-xl text-center mb-4">
        Cancel Campaign
      </Button>
    </div>
  );
}
