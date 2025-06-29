interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  error: string[];
}

export default function FormInput({
  type,
  placeholder,
  required,
  error,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2 *:pl-2">
      <input
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {error.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
