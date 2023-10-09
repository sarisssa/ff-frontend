export default function CampaignCard() {
  return (
    <div className="flex gap-5">
      <div id="image" className="h-[110px] w-[30%]">
        <img
          className="h-[100%] w-[100%] object-cover"
          src="https://placehold.co/500x145"
          alt=""
        />
      </div>
      <div className="flex flex-col w-[70%] justify-center">
        <div className="flex justify-between">
          <div className="font-bold">
            Larry June <span>$</span>
          </div>
          <span>Icon Div</span>
        </div>
        <p>Meet and Greet in Oakland</p>
        <div>Campaign Description</div>
        <div className="flex justify-between">
          <p>20d left</p>
          <p>
            <span className="font-bold">Status:</span> Pending
          </p>
        </div>
      </div>
    </div>
    // <div className="flex justify-between">
    //   <div id="picture">
    //     <Image
    //       className="rounded-full aspect-square -mr-3"
    //       src={
    //         "https://www.shutterstock.com/shutterstock/photos/2046179162/display_1500/stock-photo-blank-generic-dark-green-towel-carpet-texture-background-2046179162.jpg"
    //       }
    //       width={40}
    //       height={40}
    //       alt={`Profile picture of ${name}`}
    //     />
    //   </div>
    //   <div className="flex flex-col">
    //     <div className="flex justify-between">
    //       <span>Larry June</span>
    //       <div id="icon-container">Heart, Message, Retweet, Share</div>
    //     </div>
    //     <span>Campaign title</span>
    //     <span>Description about the campaign</span>
    //     <div className="flex">
    //       <span>20d left</span>
    //       <span>Status: Pending</span>
    //     </div>
    //   </div>
    // </div>
  );
}
