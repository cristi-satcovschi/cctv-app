type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  label: string;
  paramName: string;
  options: Option[];
  value: string;
  onChange: (paramName: string, value: string) => void;
};

export function Select({
  label,
  paramName,
  options,
  value,
  onChange,
}: SelectProps) {
  return (
    <div>
      <label className="block mb-2 font-medium">{label}:</label>
      <select
        value={value}
        onChange={(e) => onChange(paramName, e.target.value)}
        className="p-2 border rounded"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
