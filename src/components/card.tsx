interface CardProps {
  title: string;
  note: string;
  time: string;
  questions: string;
  strk: string;
  className?: string;
}

export default function Card({
  title,
  note,
  time,
  questions,
  strk,
  className,
}: CardProps) {
  return (
    <div
      className={`bg-bg-overlay inset-ring-[0.077rem] w-full max-sm:mx-auto lg:-mr-5 lg:w-[21.875rem] xl:w-[28.5rem] inset-ring-ring-color p-5 md:p-[1.875rem] flex flex-col shadow-[0_0.3125rem_0.4375rem_-0.3125rem_rgba(0,0,0,0.1),0_0.75rem_1.125rem_-0.25rem_rgba(0,0,0,0.1)] rounded-[0.625rem] ${className} `}
    >
      <h1 className="text-text-light font-bold text-[1.5625rem] xl:text-[1.875rem] font-geist z-20">
        {title}
      </h1>
      <p className="font-geist text-text-gray-dark text-base md:text-[1.25rem] pt-[1.4375rem]">
        {note}
      </p>

      <div className="flex justify-between w-full pt-[1.875rem] md:pt-[4.5625rem] pb-3 md:pb-[1.25rem]">
        <p className="text-text-gray-dark text-sm md:text-[1.0625rem] font-geist">
          Time: {time}
        </p>
        <p className="text-text-gray-dark text-sm md:text-[1.0625rem] font-geist">
          Questions: {questions}
        </p>
      </div>

      <button className="flex justify-between w-full bg-bg-button p-[1.25rem] rounded-[0.5rem] mt-auto z-20 cursor-pointer">
        <p className="text-text-light font-geist">Take Survey</p>
        <p className="text-text-light font-geist">{strk} STRK</p>
      </button>
    </div>
  );
}
