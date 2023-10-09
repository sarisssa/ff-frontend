"use client";

import { ActivityCard } from "@/components/activity/activity-card";
import { FilterList } from "@/components/ui/filter-list";
import { mockData, mockFilters } from "@/mock/activities";

export default function Activity() {
  return (
    <main className="px-4">
      <h1 className="text-2xl ml-4 font-bold">Activities & Notifications</h1>
      <FilterList
        listClassName="flex flex-col gap-2"
        itemData={mockData}
        filters={mockFilters}
        ItemComponent={({ data: activity }) => (
          <ActivityCard activity={activity} />
        )}
        showNotification
      />
    </main>
  );
}
