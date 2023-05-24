interface InputProps {
  value?: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string | null;
  placeholder?: string;
  id?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  error,
  placeholder,
  id,
}) => {
  return (
    <div>
      <h1 className="text-sm">{label}</h1>
      <div
        className={`relative border-b border-gray-300 mb-4  ${
          error ? 'border-red-500' : 'focus-within:border-gray-500'
        }`}
      >
        <input
          className="border-none p-2 text-sm border-b w-full focus:outline-0 rounded-xl"
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          id={id}
        />
        <span className="absolute text-xs text-red-500 -bottom-6 left-2">
          {error}
        </span>
      </div>
    </div>
  );
};

export default Input;
