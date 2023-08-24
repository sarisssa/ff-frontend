import { getPetitions } from "@/clients/petitions/get-petitions";
import PetitionList from "@/components/petitions/petition-list";

export default async function Home() {
  const petitions = await getPetitions();

  return (
    <main>
      <h1 className="text-bold text-3xl ml-4 mb-2">Featured Petitions</h1>
      <PetitionList petitions={petitions} />
    </main>
  );
}
