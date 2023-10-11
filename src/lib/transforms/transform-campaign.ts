import {
  Petition,
  PetitionDetails,
  UntransformedPetition,
  UntransformedPetitionDetails,
} from "../types";

export const transformCampaign = ({
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

export const transformCampaignDetails = (
  petition: UntransformedPetitionDetails
): PetitionDetails => {
  return {
    ...petition,
    ...transformCampaign(petition),
  };
};
