type DateRangeProps = {
  filters: {
    start: string;
    end: string;
  };
  onChange: (paramName: string, value: string) => void;
};

export function DateRange({ filters, onChange }: DateRangeProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 font-medium">Date Range:</label>
      <div className="space-x-2">
        <input
          type="date"
          className="p-2 border rounded"
          value={filters.start}
          onChange={(e) => onChange("start", e.target.value)}
        />
        <span>to</span>
        <input
          type="date"
          className="p-2 border rounded"
          value={filters.end}
          onChange={(e) => onChange("end", e.target.value)}
        />
      </div>
    </div>
  );
}
