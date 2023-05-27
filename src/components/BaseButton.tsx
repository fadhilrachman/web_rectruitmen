import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "white" | "red";
}
const BaseButton = ({ children, onClick, className, type, variant }: Props) => {
  const variants =
    variant === "white"
      ? "bg-white text-gray-600 shadow"
      : variant === "red"
      ? "bg-red-600 text-white"
      : "bg-green-600 text-white";

  return (
    <button
      className={`${className} ${variants}   font-bold rounded py-3 px-3`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default BaseButton;
