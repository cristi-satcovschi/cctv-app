"use client";

import { useFilters } from "@/app/_ui/filters";

import { FiltersSection } from "./_components/FiltersSection";
import { applySearchFilters } from "./_lib/applySearchFilters";

import searchResults from "./searchResults.json";
import { SearchResultsSection } from "./_components/SearchResultsSection";
import { useSearchParams } from "next/navigation";
import Head from "next/head";

export default function Search() {
  const searchParams = useSearchParams();

  const filters = {
    start: searchParams.get("start") || "",
    end: searchParams.get("end") || "",
    camera: searchParams.get("camera") || "",
    duration: searchParams.get("duration") || "",
  };

  const { filterValues, handleFilterChange, handleResetFilters } = useFilters({
    pageName: "search",
    filters,
  });

  // Apply filters to the search results
  const filteredResults: typeof searchResults = applySearchFilters(
    searchResults,
    filterValues
  );

  return (
    <>
      <Head>
        <title>Search - CCTV Video Analytics Software</title>
      </Head>

      <div className="container mx-auto px-4 mb-24">
        {/* Filters section */}
        <FiltersSection
          filters={filterValues}
          onChange={handleFilterChange}
          onReset={handleResetFilters}
        />

        {/* Search Results section */}
        <SearchResultsSection results={filteredResults} />
      </div>
    </>
  );
}
