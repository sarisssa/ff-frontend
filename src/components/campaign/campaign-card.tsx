import Image from "next/image";

export default function CampaignCard() {
  return (
    <div className="flex justify-between">
      <div id="picture">
        <Image
          className="rounded-full aspect-square -mr-3"
          src={
            "https://www.shutterstock.com/shutterstock/photos/2046179162/display_1500/stock-photo-blank-generic-dark-green-towel-carpet-texture-background-2046179162.jpg"
          }
          width={40}
          height={40}
          alt={`Profile picture of ${name}`}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <span>Larry June</span>
          <div id="icon-container">Heart, Message, Retweet, Share</div>
        </div>
        <span>Campaign title</span>
        <span>Description about the campaign</span>
        <div className="flex">
          <span>20d left</span>
          <span>Status: Pending</span>
        </div>
      </div>
    </div>
  );
}
