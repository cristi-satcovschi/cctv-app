export function getStatusColorClass(status: string): string {
  switch (status) {
    case "resolved":
      return "bg-green-500";
    case "unresolved":
      return "bg-red-500";
    case "pending":
      return "bg-yellow-500";
    default:
      return "";
  }
}
