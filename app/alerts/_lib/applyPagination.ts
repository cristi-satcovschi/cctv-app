export function applyPagination(
  alerts: Record<string, any>,
  filters: Record<string, any>
) {
  const { page } = filters;
  const startIndex = (page - 1) * 10;
  const endIndex = startIndex + 10;
  const paginatedAlerts = Object.values(alerts).slice(startIndex, endIndex);
  return paginatedAlerts;
}
