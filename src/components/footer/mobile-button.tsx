import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  text: string;
  url: string;
  isSelected?: boolean;
}

const MobileButton = ({ icon, text, url, isSelected = false }: Props) => {
  return (
    <Link
      href={url}
      className={`flex flex-col items-center gap-0.5 py-2 w-full border-b-2 ${
        isSelected ? "border-black" : "border-transparent"
      }`}
    >
      {icon}
      <span
        className={`text-sm text-gray-600 ${isSelected ? "font-bold" : ""}`}
      >
        {text}
      </span>
    </Link>
  );
};

export default MobileButton;
