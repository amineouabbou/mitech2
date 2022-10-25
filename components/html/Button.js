import React from "react";

const Button = ({ title, lowercase, type, size }) => {
  if (type === "button") {
    return (
      <button
        type="submit"
        className={`bg-primary ${lowercase ? "" : ""} ${
          size === "large"
            ? "h-[60px] font-bold text-[17px]"
            : "h-[48px] font-semibold text-[14px]"
        } text-white  px-[30px] inline-block leading-[46px]  rounded-[30px] hover:bg-primary/80 transition-all duration-300`}
      >
        {title}
      </button>
    );
  }

  return (
    <div className="button">
      <a
        className={`bg-primary ${lowercase ? "" : ""} ${
          size === "large"
            ? "h-[60px] font-bold text-[17px]"
            : "h-[48px] font-semibold text-[14px]"
        } text-white  px-[30px] inline-block leading-[46px]  rounded-[30px] hover:bg-primary/80`}
        href="#"
      >
        {title}
      </a>
    </div>
  );
};

export default Button;
