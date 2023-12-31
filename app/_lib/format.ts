export function formatDuration(durationInSeconds: number): string {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = durationInSeconds % 60;

  return `${minutes}m ${seconds}s`;
}
