import { PropsWithChildren } from "react";

interface Props {
  type?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  type = "primary",
  className,
}: PropsWithChildren<Props>) {
  return (
    <button
      className={`${
        type === "primary"
          ? "bg-ff-dark-gray text-white hover:brightness-90"
          : "bg-ff-gray text-ff-dark-gray hover:brightness-90"
      } flex gap-1 items-center px-2 py-1.5 whitespace-nowrap rounded ${className}`}
    >
      {children}
    </button>
  );
}
