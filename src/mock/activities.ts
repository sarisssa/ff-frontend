import { Activity, Filter } from "@/lib/types";

export const mockData: Activity[] = [
  {
    imgUrl: "",
    title: "Significant Petition Notification",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quos nisi illo rem amet dolor dolorum fugit, voluptates sint voluptatem! Voluptatem deleniti magni dolorum delectus, alias facere harum voluptatibus. Molestiae.",
    category: "NFT",
    createdAt: new Date(2023, 3, 8),
  },
  {
    imgUrl: "https://example.com/image1.jpg",
    title: "Exciting Product Launch",
    category: "Petition",
    description:
      "Join us for the grand unveiling of our latest product. Be the first to experience groundbreaking technology!",
    createdAt: new Date(2023, 5, 20),
  },
  {
    imgUrl: "https://example.com/image2.jpg",
    title: "Upcoming Webinar: Digital Marketing Trends",
    category: "Mention",
    description:
      "Learn about the latest digital marketing trends and strategies in our upcoming webinar. Register now!",
    createdAt: new Date(2023, 6, 10),
  },
  {
    imgUrl: "https://example.com/image3.jpg",
    title: "New Recipe Collection",
    category: "Mention",
    description:
      "Discover delicious recipes from around the world in our latest recipe collection. Get cooking today!",
    createdAt: new Date(2023, 7, 2),
  },
  {
    imgUrl: "https://example.com/image4.jpg",
    title: "Exclusive Sale Event",
    category: "NFT",
    description:
      "Don't miss our exclusive sale event! Get amazing discounts on a wide range of products.",
    createdAt: new Date(2023, 8, 15),
  },
  {
    imgUrl: "https://example.com/image5.jpg",
    title: "Company Newsletter",
    category: "Mention",
    description:
      "Stay updated with our company news, achievements, and upcoming events in our monthly newsletter.",
    createdAt: new Date(2023, 9, 5),
  },
];

export const mockFilters: Filter<Activity>[] = [
  {
    title: "All",
    filterFn: () => true,
  },
  {
    title: "Petitions",
    filterFn: (data) => data.category === "Petition",
  },
  {
    title: "NFTs",
    filterFn: (data) => data.category === "NFT",
  },
  {
    title: "Mentions",
    filterFn: (data) => data.category === "Mention",
  },
];
