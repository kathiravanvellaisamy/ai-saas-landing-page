import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

export const Button = ({ onClick, children, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={` px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border border-transparent bg-violet-600  ${className}`}
    >
      <span className="relative text-white">{children}</span>
    </button>
  );
};
