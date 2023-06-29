import React from "react";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: JSX.Element;
}

export const PathButton = ({ icon, text, ...props }: BtnProps) => {
  return (
    <div>
      <button
        {...props}
        className="w-52 bg-neutral-400 px-4 py-4 flex flex-row items-center gap-3 rounded-md shadow font-semibold"
      >
        {icon}
        {text}
      </button>
    </div>
  );
};
