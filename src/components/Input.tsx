interface FormInputProps {
  id: string;
  type: string;
  register: any;
  errorMessage?: string;
  placeholder?: string;
}

export const FormInput = ({
  id,
  type,
  register,
  errorMessage,
  placeholder,
}: FormInputProps) => {
  return (
    <div className="mb-4">
      <input
        id={id}
        type={type}
        {...register(id)}
        placeholder={placeholder}
        className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
};
