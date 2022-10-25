import Image from "next/image";
import React from "react";

const Vericalbox = ({ title, description, icone }) => {
  return (
    <div className="bg-white rounded-[10px] px-[26px] py-[35px] drop-shadow-[1px_1px_18px_rgba(0,0,0,0.07)]">
      <div className="icon-box mb-[10px]">
        <div className="w-[95px] h-[75px] flex flex-col justify-center items-center">
          <div className="w-[79%] h-[79%] relative">
            <Image src={icone} layout="fill" alt="" />
          </div>
        </div>
      </div>
      <div className="text-[23px] leading-[33px] text-primary font-medium tracking-[0.03em] mb-[14px]">
        {title}
      </div>
      <p className="font-medium text-[16px] leading-[25px] tracking-[0.025em]">
        {description}
      </p>
    </div>
  );
};

export default Vericalbox;
