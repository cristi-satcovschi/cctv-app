export function getServerStatusColorClass(status: string): string {
  switch (status) {
    case "Online":
      return "bg-green-500";
    case "Offline":
      return "bg-red-500";
    case "Normal":
      return "bg-blue-500";
    default:
      return "bg-gray-500";
  }
}
