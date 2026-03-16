import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  icon?: string;
  variant?: "primary" | "outline" | "gradientBorder" | "apply";
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  icon,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  if (variant === "gradientBorder") {
    return (
      <div
        className="inline-block text-[#222222] p-[3px] rounded-lg bg-gradient-to-b from-[#C7B29B] to-[#947A5F]"
        onClick={onClick}
      >
        <button className="text-[#222222] bg-[#EEECE8] px-9 py-2 rounded-md text-[15px] cursor-pointer flex items-center gap-3 lufga_semibold">
          {icon && <img src={icon} alt="" />}
          {children}
        </button>
      </div>
    );
  }

  if (variant === "outline") {
    return (
      <button
        onClick={onClick}
        className="px-8 py-2 rounded-[8px] border border-[#979797] lufga_semibold text-[16px] text-[#979797] cursor-pointer"
      >
        {children}
      </button>
    );
  }

  if (variant === "apply") {
    return (
      <button
        onClick={onClick}
        className="flex-1 py-2 rounded-md bg-gradient-to-b from-[#C7B29B] to-[#91775C] text-white flex items-center justify-center gap-2 lufga_semibold cursor-pointer"
      >
        {icon && <img src={icon} alt="" className="invert brightness-0" />}
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer px-6 py-2 rounded-[8px] text-sm text-white bg-gradient-to-b from-[#C7B29B] to-[#91775C] hover:opacity-90 transition flex items-center gap-3 lufga_semibold ${className}`}
    >
      {icon && <img src={icon} alt="" />}
      {children}
    </button>
  );
}