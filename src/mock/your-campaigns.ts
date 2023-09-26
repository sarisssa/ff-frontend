import { ExperiencePassCardDetails, Filter } from "@/lib/types";

export const mockPasses: ExperiencePassCardDetails[] = [
  {
    imgUrl: "https://example.com/pass1.jpg",
    producerName: "Adventure Co.",
    experienceTitle: "Mountain Expedition",
    experienceDate: new Date(2023, 6, 15),
    category: "Petition NFT",
  },
  {
    imgUrl: "https://example.com/pass2.jpg",
    producerName: "Travel World",
    experienceTitle: "Tropical Getaway",
    experienceDate: new Date(2023, 7, 10),
    category: "Experience NFT",
  },
  {
    imgUrl: "https://example.com/pass3.jpg",
    producerName: "Artistic Tours",
    experienceTitle: "City Art Walk",
    experienceDate: new Date(2023, 8, 5),
    category: "Petition NFT",
  },
  {
    imgUrl: "https://example.com/pass4.jpg",
    producerName: "Wildlife Explorers",
    experienceTitle: "Safari Adventure",
    experienceDate: new Date(2023, 9, 20),
    category: "Petition NFT",
  },
  {
    imgUrl: "https://example.com/pass5.jpg",
    producerName: "Culinary Journeys",
    experienceTitle: "Food Tasting Tour",
    experienceDate: new Date(2023, 10, 2),
    category: "Petition NFT",
  },
  {
    imgUrl: "https://example.com/pass6.jpg",
    producerName: "History Expeditions",
    experienceTitle: "Historical Sites Tour",
    experienceDate: new Date(2023, 11, 8),
    category: "Petition NFT",
  },
  {
    imgUrl: "https://example.com/pass7.jpg",
    producerName: "Outdoor Adventures",
    experienceTitle: "Kayaking Expedition",
    experienceDate: new Date(2023, 11, 28),
    category: "Experience NFT",
  },
  {
    imgUrl: "https://example.com/pass8.jpg",
    producerName: "Wellness Retreats",
    experienceTitle: "Yoga and Meditation Retreat",
    experienceDate: new Date(2024, 0, 12),
    category: "Experience NFT",
  },
  {
    imgUrl: "https://example.com/pass9.jpg",
    producerName: "Cultural Encounters",
    experienceTitle: "Cultural Immersion Experience",
    experienceDate: new Date(2024, 1, 7),
    category: "Experience NFT",
  },
  {
    imgUrl: "https://example.com/pass10.jpg",
    producerName: "Scenic Tours",
    experienceTitle: "Scenic Train Ride",
    experienceDate: new Date(2024, 2, 18),
    category: "Experience NFT",
  },
];

export const mockFilters: Filter<ExperiencePassCardDetails>[] = [
  {
    title: "All",
    filterFn: () => true,
  },
  {
    title: "Created by You",
    filterFn: (data) => data.category === "Created by You",
  },
  {
    title: "Signed by You",
    filterFn: (data) => data.category === "Signed by You",
  },
];
