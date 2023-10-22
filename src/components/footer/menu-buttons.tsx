import { BsLightning } from "@react-icons/all-files/bs/BsLightning";
import { BsPerson } from "@react-icons/all-files/bs/BsPerson";
import { IoMdHome } from "@react-icons/all-files/io/IoMdHome";
import { MdOutlinePostAdd } from "react-icons/md";
import { TfiWallet } from "react-icons/tfi";

export const menuButtons = [
  {
    icon: <IoMdHome />,
    text: "Home",
    url: "/",
  },
  {
    icon: <BsLightning />,
    text: "Activity",
    url: "/activity-&-notifications",
  },
  {
    icon: <MdOutlinePostAdd />,
    text: "Campaigns",
    url: "/your-campaigns",
  },
  {
    icon: <TfiWallet />,
    text: "Passes",
    url: "/passes",
  },
  {
    icon: <BsPerson />,
    text: "Profile",
    url: "/user-profile",
  },
] as const;
