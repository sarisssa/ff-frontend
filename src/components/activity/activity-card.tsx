import { Activity } from "@/lib/types";
import Image from "next/image";

interface Props {
  activity: Activity;
}

export const ActivityCard = ({ activity }: Props) => {
  const { imgUrl, title, description } = activity;

  return (
    <div className="bg-gray-100 flex">
      <Image
        src={imgUrl}
        alt={title}
        width={100}
        height={75}
        className="flex-grow flex-shrink-0"
      />
      <div>
        <h3 className="font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
