"use client";

import CampaignCard from "@/components/campaign/campaign-card";
import { FilterList } from "@/components/ui/filter-list";
import { mockFilters, mockPasses } from "@/mock/your-campaigns";
import Image from "next/image";

export default function YourCampaigns() {
  return (
    <main className="px-4">
      <div className="flex flex-col">
        <div className="flex gap-4 items-center font-bold">
          <Image
            className="rounded-full aspect-square -mr-3"
            src={
              "data:image/jpeg;base64,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"
            }
            width={40}
            height={40}
            alt=""
          />
          <h1>Your Campaigns</h1>
        </div>
        <span>48% to the way to micro influencer!</span>
        <progress className="progress" value={48} max={100} />
      </div>
      <FilterList
        listClassName="grid grid-cols-2 gap-3"
        itemData={mockPasses}
        filters={mockFilters}
        ItemComponent={({ data: pass }) => <CampaignCard />}
        showNotification
      />
    </main>
  );
}
