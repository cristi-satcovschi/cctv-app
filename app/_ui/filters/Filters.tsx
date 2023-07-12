import { ReactNode } from "react";

type FiltersProps = {
  children: ReactNode;
  filters: Record<string, any>;
  onReset: () => void;
};

export function Filters({ children, filters, onReset }: FiltersProps) {
  const appliedFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="pt-8 pb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        {appliedFiltersCount > 0 && (
          <span className="text-gray-600">
            {appliedFiltersCount} filters applied
          </span>
        )}{" "}
      </div>

      <div className="flex flex-row space-x-8">{children}</div>

      {/* Search and Reset Filters buttons */}
      <div className="flex space-x-4 mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onReset}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
