import { Pass } from "@/lib/types";
import Image from "next/image";

interface Props {
  pass: Pass;
}

export const PassCard = ({ pass }: Props) => {
  const { imgUrl, producerName, experienceTitle, experienceDate } = pass;

  return (
    <div className="bg-gray-100 flex flex-col">
      <Image
        src={imgUrl}
        alt={experienceTitle}
        width={100}
        height={75}
        className="flex-grow flex-shrink-0"
      />
      <div>
        <h3 className="font-bold">{producerName}</h3>
        <span>{experienceTitle}</span>
        <span>{experienceDate.toDateString()}</span>
      </div>
    </div>
  );
};
