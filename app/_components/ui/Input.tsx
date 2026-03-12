interface Props {
  placeholder?: string;
}

export default function Input({ placeholder }: Props) {
  return (
    <input
      placeholder={placeholder}
      className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
    />
  );
}