export function applySearchFilters(
  searchResults: Record<string, any>,
  filters: Record<string, any>
) {
  return searchResults.filter((result: Record<string, any>) => {
    const { start, end, camera, duration } = filters;

    // Convert the result's dateTime to a Date object for comparison
    const resultDateTime = new Date(result.dateTime);

    // Check if the result matches the filters
    const matchesStart = !start || resultDateTime >= new Date(start);
    const matchesEnd = !end || resultDateTime <= new Date(end);
    const matchesCamera = !camera || result.camera === camera;
    const matchesDuration =
      !duration ||
      (duration === "short" && result.duration < 60) ||
      (duration === "medium" &&
        result.duration >= 60 &&
        result.duration <= 300) ||
      (duration === "long" && result.duration > 300);

    return matchesStart && matchesEnd && matchesCamera && matchesDuration;
  });
}
