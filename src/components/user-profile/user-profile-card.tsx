import { ExperiencePassCardDetails } from "@/lib/types";
import Image from "next/image";

interface Props {
  pass: ExperiencePassCardDetails;
}

export const UserProfileCard = ({ pass }: Props) => {
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
    </div>
  );
};
