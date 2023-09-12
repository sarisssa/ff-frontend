import {
  Petition,
  PetitionDetails,
  UntransformedPetition,
  UntransformedPetitionDetails,
} from "../types";

export const transformPetition = ({
  publicationDate,
  deadline,
  ...rest
}: UntransformedPetition): Petition => {
  return {
    ...rest,
    publicationDate: new Date(publicationDate),
    deadline: new Date(deadline),
  };
};

export const transformPetitionDetails = (
  petition: UntransformedPetitionDetails
): PetitionDetails => {
  return {
    ...petition,
    ...transformPetition(petition),
  };
};
