import { mockData } from "@/mock/petition-details";
import { PetitionDetails } from "../../lib/types";

export const getPetitionDetails = async (
  id: string
): Promise<PetitionDetails | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // const petitionDetails = petitions.find((petition) => petition.id === id);

  // if (!petitionDetails) return undefined;

  return mockData;
};
