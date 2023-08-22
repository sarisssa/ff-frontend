import { BsLightning, BsPerson } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
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
    url: "/activity",
  },
  {
    icon: <MdOutlinePostAdd />,
    text: "Petitions",
    url: "/petitions",
  },
  {
    icon: <TfiWallet />,
    text: "Wallet",
    url: "/wallet",
  },
  {
    icon: <BsPerson />,
    text: "Profile",
    url: "/profile",
  },
] as const;
