type Modify<T, R> = Omit<T, keyof R> & R;

export type UntransformedPetition = {
  id: string;
  //John Smith
  creator: {
    name: string;
    profilePic: string;
  };
  message: string;
  location: string;
  //Kevin Durant
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

export type UserProfileDetails = {
  profilePic: string;
  coverPic: string;
  name: string;
  username: string;
  location: string;
  influencerProgress: number;
  numCampaigns: number;
  numFollowers: number;
  numFollowing: number;
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
  activities: CampaignActivity[];
  comments: { event: "comment"; value: string }[];
};

export type PetitionDetails = Modify<
  UntransformedPetitionDetails,
  {
    publicationDate: Date;
    deadline: Date;
  }
>;

export type CampaignActivity =
  | {
      event: "user-joined";
      user: {
        name: string;
        profilePic: string;
      };
      createdAt: Date;
    }
  | {
      event: "new-petition-milestone";
      imgUrl: string;
      currentReach: number;
      createdAt: Date;
    }
  | {
      event: "petition-created";
      // imgUrl: string;
      // currentReach: number;
      // createdAt: Date;
    };

export interface Activity {
  imgUrl: string;
  title: string;
  description: string;
  category: string;
  createdAt: Date;
}

export interface ExperiencePassCardDetails {
  imgUrl: string;
  producerName: string;
  experienceTitle: string;
  experienceDate: Date;
  category: string;
}

enum Status {
  Pending = "pending",
  Success = "success",
  Lapsed = "lapsed",
}

export interface CampaignCardDetails {
  imgUrl: string;
  campaignTitle: string;
  campaignDescription: string;
  status: Status;
  deadline: string;
}

export interface ProfileCardDetail {
  imgUrl: string;
}

export interface Filter<T> {
  title: string;
  filterFn?: (data: T) => boolean;
}
