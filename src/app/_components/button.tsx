

interface ButtonProps{
    text: string;
    className?: string;
    onClick?: () => void;
}

export default function Button({text, className, onClick}: ButtonProps) {
    return (
        <button className={`bg-[#9011FF] max-sm:w-[200px] inset-ring-1 inset-ring-[#B159FF] text-white py-4 px-6 rounded-[12px] font-[700] text-[16px] cursor-pointer ${className}`} onClick={onClick}>
            {text}
        </button>
    )
}