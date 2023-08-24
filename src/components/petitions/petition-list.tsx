import { Petition } from "@/lib/types";
import PetitionContainer from "./petition-container";

interface Props {
  petitions: Petition[];
}

export default function PetitionList({ petitions }: Props) {
  return (
    <div className="flex flex-col gap-4 px-2">
      {petitions.map((petition) => (
        <PetitionContainer petition={petition} />
      ))}
    </div>
  );
}
