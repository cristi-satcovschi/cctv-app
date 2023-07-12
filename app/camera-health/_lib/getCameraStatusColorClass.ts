export function getCameraStatusColorClass(status: string): string {
  switch (status) {
    case "Online":
      return "bg-green-500";
    case "Offline":
      return "bg-red-500";
    case "Recording":
      return "bg-yellow-500";
    default:
      return "bg-gray-500";
  }
}
