import petitions from "../../mock/petitions.json";

export const getPetitions = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return petitions.map(({ publicationDate, deadline, ...rest }) => ({
    ...rest,
    publicationDate: new Date(publicationDate),
    deadline: new Date(deadline),
  }));
};
