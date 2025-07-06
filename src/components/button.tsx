interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({ text, className, onClick }: ButtonProps) {
  return (
    <button
      className={`bg-primary-purple max-sm:w-[12.5rem] inset-ring-1 inset-ring-primary-purple-light text-white py-4 px-6 rounded-xl font-bold text-base cursor-pointer ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
