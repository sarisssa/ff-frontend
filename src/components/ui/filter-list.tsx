"use client";

import { ComponentType, useState } from "react";

interface Props<T> {
  itemData: T[];
  filters: {
    title: string;
    filterFn: (data: T) => boolean;
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
      <header className="flex justify-between">
        {filters.map((filter) => {
          const filteredLength = itemData.filter((dataEntry) =>
            filter.filterFn(dataEntry)
          ).length;
          return (
            <button
              onClick={() => setActiveFilter(filter.title)}
              className={`px-3 py-2 flex gap-2 border-b-4 ${
                activeFilter === filter.title
                  ? "border-black text-black font-bold"
                  : "border-transparent text-gray-500"
              }`}
              key={filter.title}
            >
              <span>{filter.title}</span>

              {showNotification && (
                <span className="bg-gray-600 rounded-full text-white px-2 aspect-square">
                  {filteredLength}
                </span>
              )}
            </button>
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
