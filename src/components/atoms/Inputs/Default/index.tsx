import { InputHTMLAttributes } from "react";

export const Default = ({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="w-full">
      <input
        className="outline-none border-2 w-full rounded px-2 py-2 font-['Poppins'] font-medium h-10"
        {...props}
      />
    </div>
  );
};
