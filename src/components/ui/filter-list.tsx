"use client";

import { ComponentType, useState } from "react";
import TabButton from "./tab-button";

interface Props<T> {
  itemData: T[];
  filters: {
    title: string;
    filterFn?: (data: T) => boolean;
  }[];
  ItemComponent: ComponentType<{ data: T }>;
  listClassName?: string;
  showNotification?: boolean;
}

// Where ever filterList is used, make parent client component

export function FilterList<T>({
  itemData,
  filters,
  ItemComponent: FilterComponent,
  listClassName,
  showNotification,
}: Props<T>) {
  const [activeFilter, setActiveFilter] = useState(filters[0].title);
  // Find the actual filter function

  const filterFunction = filters.find(
    (filter) => activeFilter === filter.title
  )?.filterFn;

  return (
    <section>
      <header className="flex justify-between text-sm">
        {filters.map((filter, idx) => {
          const filteredLength = itemData.filter((dataEntry) =>
            filter.filterFn?.(dataEntry)
          ).length;

          return (
            <TabButton
              key={idx}
              isSelected={activeFilter === filter.title}
              indicator={filteredLength}
              onClick={() => setActiveFilter(filter.title)}
            >{filter.title}</TabButton>
          );
        })}
      </header>
      <div className={listClassName}>
        {itemData
          .filter((entry) => filterFunction?.(entry))
          .map((dataEntry, idx) => (
            <FilterComponent key={idx} data={dataEntry} />
          ))}
      </div>
    </section>
  );
}

//Filter itemData so that any entry that passes the filter function, and then map over it to create the respective components
