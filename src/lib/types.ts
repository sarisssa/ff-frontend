export interface Petition {
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
  publicationDate: Date;
  deadline: Date;
  coverImage: string;
  numPetitioners: number;
  numRetweets: number;
  numComments: number;
  numLikes: number;
}
