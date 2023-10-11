"use client";

import { KeyboardEventHandler, useState } from "react";

interface Props {
  children: string;
  charThreshold?: number;
}

export const SeeMore = ({ children: text, charThreshold = 35 }: Props) => {
  const [expand, setExpand] = useState(false);

  const onKeyUp: KeyboardEventHandler<HTMLSpanElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      setExpand(true);
    }
  };

  if (text.length < charThreshold || expand) {
    return <p>{text}</p>;
  } else {
    return (
      <p>
        {text.slice(0, charThreshold)} ...{" "}
        <span
          tabIndex={0}
          className="font-bold cursor-pointer"
          onClick={() => setExpand(true)}
          onKeyUp={onKeyUp}
        >
          see more
        </span>
      </p>
    );
  }
};
