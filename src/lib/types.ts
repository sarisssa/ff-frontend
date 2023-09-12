type Modify<T, R> = Omit<T, keyof R> & R;

export type UntransformedPetition = {
  id: string;
  creator: {
    name: string;
    profilePic: string;
  };
  message: string;
  location: string;
  petitionee: {
    name: string;
    profilePic: string;
  };
  description: string;
  fee: number;
  publicationDate: string;
  deadline: string;
  coverImage: string;
  numPetitioners: number;
  numRetweets: number;
  numComments: number;
  numLikes: number;
};

export type Petition = Modify<
  UntransformedPetition,
  {
    publicationDate: Date;
    deadline: Date;
  }
>;

export type UntransformedPetitionDetails = UntransformedPetition & {
  signatoryPreviewList: {
    name: string;
    profilePic: string;
  }[];
  currentSignatories: number;
  totalSignatories: number;
  currentFundedAmount: number;
  goalAmount: number;
  nPetitionReports: number;
  nPetitionComments: number;
  nPetitionActivities: number;
};

export type PetitionDetails = Modify<
  UntransformedPetitionDetails,
  {
    publicationDate: Date;
    deadline: Date;
  }
>;

export interface Activity {
  imgUrl: string;
  title: string;
  description: string;
  category: string;
  createdAt: Date;
}

export interface Pass {
  imgUrl: string;
  producerName: string;
  experienceTitle: string;
  experienceDate: Date;
  category: string;
}

export interface Filter<T> {
  title: string;
  filterFn: (data: T) => boolean;
}
