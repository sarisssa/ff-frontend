import campaigns from "@/mock/campaigns.json";
import { transformCampaignDetails } from "../../lib/transforms/transform-campaign";
import { PetitionDetails } from "../../lib/types";

export const getCampaignDetails = async (
  id: string
): Promise<PetitionDetails | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const campaignDetails = campaigns.find((campaign) => campaign.id === id);

  if (!campaignDetails) return undefined;

  return transformCampaignDetails(campaignDetails);
};
