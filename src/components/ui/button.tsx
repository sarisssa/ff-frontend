import { PropsWithChildren } from "react";

interface Props {
  type?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  type = "primary",
  className,
  onClick,
}: PropsWithChildren<Props>) {
  return (
    <button
      className={`${
        type === "primary"
          ? "bg-ff-dark-gray text-white hover:brightness-90"
          : "bg-ff-gray text-ff-dark-gray hover:brightness-90"
      } px-2 py-3 whitespace-nowrap w-[100%] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
