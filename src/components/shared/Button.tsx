
interface ButtonProps {
  text: string;
  size?: "lg" | "sm";
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "destructive";
  onClick?: () => void;
}

function Button({ text, size = "lg", type = "button", variant = "primary", onClick }: ButtonProps) {
  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses = "text-white bg-primary hover:bg-primary-light";
      break;
    case "secondary":
      variantClasses = "text-primary bg-primary bg-opacity-10 hover:bg-opacity-25";
      break;
    case "destructive":
      variantClasses = "text-white bg-secondary hover:bg-secondary-light";
      break;
    default:
      variantClasses = "text-white bg-primary hover:bg-primary-light";
      break;
  }

  let sizeClasses = "";
  switch (size) {
    case "lg":
      sizeClasses = "px-6 py-3.5 text-15px";
      break;
    case "sm":
      sizeClasses = "px-6 py-2 text-13px";
      break;
    default:
      sizeClasses = "px-6 py-3.5 text-15px";
      break;
  }

  return (
    <button
      type={type}
      className={`flex items-center font-bold rounded-full ${sizeClasses} ${variantClasses}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button;