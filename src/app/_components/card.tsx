

interface CardProps {
    title: string;
    note: string;
    time: string;
    questions: string;
    strk: string;
    className?: string;
}

export default function Card({ title, note, time, questions, strk, className }: CardProps) {
    return (
        <div className={`bg-[#0F0D0F] inset-ring-[1.23px] w-full max-sm:mx-auto lg:-mr-5 lg:w-[350px] xl:w-[456px] inset-ring-[#2B1627] p-5 md:p-[30px] flex flex-col shadow-[0px_5px_7px_-5px_#0000001A,0px_12px_18px_-4px_#0000001A] rounded-[10px] ${className} `}>

            <h1 className="text-[#EFEFEF] font-[700] text-[25px] xl:text-[30px] font-geist z-20">{title}</h1>
            <p className="font-geist text-[#71717A] text-[16px] md:text-[20px] pt-[23px]">{note}</p>
            
            <div className="flex justify-between w-full pt-[30px] md:pt-[73px] pb-3 md:pb-[20px]">
                <p className="text-[#71717A] text-sm md:text-[17px] font-geist">Time: {time}</p>
                <p className="text-[#71717A] text-sm md:text-[17px] font-geist">Questions: {questions}</p>
            </div>

            <button className="flex justify-between w-full bg-[#18181B] p-[20px] rounded-[8px] mt-auto z-20 cursor-pointer">
                <p className="text-[#EFEFEF] font-geist">Take Survey</p>
                <p className="text-[#EFEFEF] font-geist">{strk} STRK</p>
            </button>

        </div>
    )
}