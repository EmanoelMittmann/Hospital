import React from "react";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: JSX.Element;
}

export const Create = ({ text, icon, ...props }: BtnProps) => {
  return (
    <button
      type="button"
      className="gap-4 font-medium rounded bg-green-500 w-32 h-10 text-white"
      {...props}
    >
      {icon} {text}
    </button>
  );
};
