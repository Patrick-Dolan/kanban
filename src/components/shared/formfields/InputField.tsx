interface InputFieldProps {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  errorMessage?: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({ label, placeholder, type, value, errorMessage, onChange }: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={label} className="font-bold">{label}</label>
      <div className="relative flex items-center">
        <input
          id={label}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`py-2 px-4 w-full rounded-md border border-gray border-opacity-25 font-medium text-13px leading-5.75 dark:bg-black-3 dark:text-white placeholder:opacity-25 ${errorMessage && "border-secondary border-opacity-100"}`}
        />
        {errorMessage && 
          <div className="absolute flex items-center justify-center h-full right-4">
          <p className="text-secondary leading-5.75 font-medium text-13px">{errorMessage}</p>
        </div>
        }
      </div>
    </div>
  )
}

export default InputField;