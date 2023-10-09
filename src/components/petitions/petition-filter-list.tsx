"use client";

import { PetitionDetails } from "@/lib/types";
import { mockData, mockFilters } from "@/mock/petition-details";
import { FilterList } from "../ui/filter-list";
import CampaignActivityCard from "./campaign-activity-card";

export default function PetitionFilterList() {
  return (
    <FilterList<PetitionDetails["activities"][number]>
      listClassName="flex flex-col gap-2"
      itemData={mockData.activities}
      filters={mockFilters}
      ItemComponent={({ data: activity }) => (
        <CampaignActivityCard activity={activity} />
      )}
      showNotification
    />
  );
}
