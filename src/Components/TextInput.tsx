export default function TextInput({
  name,
  setValue,
  value,
  type = "text",
  required = false,
}: {
  name: string;
  setValue: (value: string) => void;
  value: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <input
      type={type}
      id={name}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border-2 border-gray-300 rounded-lg p-2"
      required={required}
    />
  );
}
