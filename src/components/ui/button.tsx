import clsx from "clsx";
import { PropsWithChildren } from "react";

interface Props {
  type?: "primary" | "border" | "secondary";
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
      className={clsx("px-1 py-2 whitespace-nowrap w-full", className, {
        "bg-ff-dark-gray text-white hover:brightness-90": type === "primary",
        "bg-ff-gray text-ff-dark-gray hover:brightness-90 border-2 border-ff-dark-gray":
          type === "border",
        "text-ff-dark-gray bg-ff-border-light": type === "secondary",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
