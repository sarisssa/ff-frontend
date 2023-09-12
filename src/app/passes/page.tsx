"use client";

import { PassCard } from "@/components/pass/pass-card";
import { FilterList } from "@/components/ui/filter-list";
import { mockFilters, mockPasses } from "@/mock/pass";

export default function Passes() {
  return (
    <main className="px-4">
      <FilterList
        listClassName="grid grid-cols-2 gap-2"
        itemData={mockPasses}
        filters={mockFilters}
        ItemComponent={({ data: pass }) => <PassCard pass={pass} />}
      />
    </main>
  );
}
