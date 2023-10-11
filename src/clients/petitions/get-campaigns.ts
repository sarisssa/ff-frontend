import campaigns from "../../mock/campaigns.json";

export const getCampaigns = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return campaigns.map(({ publicationDate, deadline, ...rest }) => ({
    ...rest,
    publicationDate: new Date(publicationDate),
    deadline: new Date(deadline),
  }));
};
