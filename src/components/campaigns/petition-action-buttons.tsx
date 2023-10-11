import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { PiScrollDuotone } from "react-icons/pi";
import { RiShareForwardFill } from "react-icons/ri";

const petitionActionButtons = [
  {
    icon: <PiScrollDuotone />,
    text: "202",
  },
  {
    icon: <FaRetweet />,
    text: "15",
  },
  {
    icon: <BiCommentDetail />,
    text: "75",
  },
  {
    icon: <AiOutlineHeart />,
    text: "234",
  },
  {
    icon: <RiShareForwardFill />,
    text: "",
  },
] as const;

export const PetitionActionButtons = () => {
  return petitionActionButtons.map(({ icon, text }, i) => (
    <button className="flex gap-1 h-12 items-center text-2xl" key={i}>
      {icon}
      <span className="text-xs">{text}</span>
    </button>
  ));
};
