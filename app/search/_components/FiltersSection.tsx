import { Select } from "@/app/_ui/input/Select";
import { DateRange } from "@/app/_ui/input/DateRange";
import { Filters } from "@/app/_ui/filters";

type FiltersSectionProps = {
  filters: Record<string, any>;
  onChange: (paramName: string, value: string) => void;
  onReset: () => void;
};

const durationOptions = [
  { value: "", label: "Any Duration" },
  { value: "short", label: "Short (less than 1 minute)" },
  { value: "medium", label: "Medium (1-5 minutes)" },
  { value: "long", label: "Long (more than 5 minutes)" },
];

const cameraOptions = [
  { value: "", label: "All Cameras" },
  { value: "camera1", label: "Camera 1" },
  { value: "camera2", label: "Camera 2" },
  { value: "camera3", label: "Camera 3" },
];

export function FiltersSection({
  filters,
  onChange,
  onReset,
}: FiltersSectionProps) {
  return (
    <Filters filters={filters} onReset={onReset}>
      {/* Date Range */}
      <DateRange
        filters={{ start: filters.start, end: filters.end }}
        onChange={onChange}
      />

      {/* Camera Selection */}
      <Select
        label="Camera"
        paramName="camera"
        options={cameraOptions}
        value={filters.camera}
        onChange={onChange}
      />

      {/* Duration */}
      <Select
        label="Duration"
        paramName="duration"
        options={durationOptions}
        value={filters.duration}
        onChange={onChange}
      />
    </Filters>
  );
}
