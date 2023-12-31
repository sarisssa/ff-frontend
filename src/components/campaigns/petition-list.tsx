import { Petition } from "@/lib/types";
import PetitionContainer from "./campaign-container";

interface Props {
  petitions: Petition[];
}

export default function PetitionList({ petitions }: Props) {
  return (
    <div className="flex flex-col gap-4 px-2">
      {petitions.map((petition, i) => (
        <PetitionContainer key={i} petition={petition} />
      ))}
    </div>
  );
}
