"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

type Filters = {
  [key: string]: string;
};

type UseSearchFiltersProps = {
  pageName: string;
  filters: Filters;
};

export function useFilters({ pageName, filters }: UseSearchFiltersProps) {
  const router = useRouter();

  const [filterValues, setFilterValues] = useState<Filters>({
    ...filters,
  });

  // Apply the filters to the URL whenever they change
  useEffect(() => {
    const urlSearchParams = new URLSearchParams();

    Object.entries(filterValues).forEach(([paramName, paramValue]) => {
      if (paramValue) urlSearchParams.set(paramName, paramValue);
    });

    const queryString = urlSearchParams.toString();

    router.replace(`/${pageName}?${queryString}`, { scroll: false });
  }, [pageName, filterValues, router]);

  const handleFilterChange = (paramName: string, paramValue: string) => {
    setFilterValues((prevFilterValues) => ({
      ...prevFilterValues,
      [paramName]: paramValue,
    }));
  };

  const handleResetFilters = () => {
    setFilterValues(filters);
  };

  return {
    filterValues,
    handleFilterChange,
    handleResetFilters,
  };
}
