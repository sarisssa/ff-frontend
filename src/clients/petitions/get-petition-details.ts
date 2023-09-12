import { transformPetitionDetails } from "@/lib/transforms/transform-petition";
import { PetitionDetails } from "../../lib/types";
import petitions from "../../mock/petitions.json";

export const getPetitionDetails = async (
  id: string
): Promise<PetitionDetails | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const petitionDetails = petitions.find((petition) => petition.id === id);

  if (!petitionDetails) return undefined;

  return transformPetitionDetails(petitionDetails);
};
