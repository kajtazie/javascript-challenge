import './FormInput.scss'; 

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
    <div className="form-input-container">
      <input
        id={id}
        type={type}
        {...register(id)}
        placeholder={placeholder}
        className="form-input"
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};
