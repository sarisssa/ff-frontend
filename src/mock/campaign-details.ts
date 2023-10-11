// import { Filter, PetitionDetails } from "@/lib/types";
// import petitions from "./petitions.json";

// export const mockData: PetitionDetails = {
//   ...petitions[0],
//   publicationDate: new Date(petitions[0].publicationDate),
//   deadline: new Date(petitions[0].deadline),
//   comments: [{ event: "comment", value: "This is a comment" }],
//   activities: [
//     {
//       event: "user-joined",
//       user: {
//         name: "Jason Dude",
//         profilePic: "TBD",
//       },
//       createdAt: new Date(),
//     },
//   ],
// };

// export const mockFilters: Filter<
//   PetitionDetails["activities"][number] | PetitionDetails["comments"][number]
// >[] = [
//   {
//     title: "Details",
//   },
//   {
//     title: "Reposts",
//     filterFn: (data) => false,
//   },
//   {
//     title: "Comments",
//     filterFn: (data) => data.event === "comment",
//   },
//   {
//     title: "Activity",
//     filterFn: (data) =>
//       data.event === "user-joined" ||
//       data.event === "new-petition-milestone" ||
//       data.event === "petition-created",
//   },
// ];
