import { getCampaigns } from "@/clients/petitions/get-campaigns";
import PetitionList from "@/components/campaigns/petition-list";

export default async function Home() {
  const petitions = await getCampaigns();

  return (
    <main>
      <h1 className="text-bold text-3xl ml-4 mb-2">Featured Petitions</h1>
      <PetitionList petitions={petitions} />
    </main>
  );
}
