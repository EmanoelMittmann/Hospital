import React from "react";
import { ShelfProps } from "../types";
import { RecordsProps } from "contexts/List/Records/types";

export const Shelf = ({ props }: ShelfProps<RecordsProps>) => {
  const { address, cpf, namePatient, phone } = props;
  return (
    <div className="grid grid-cols-4 items-center py-6 px-3 rounded border-2 overflow-auto cursor-pointer">
      <div className="flex items-center overflow-hidden">{namePatient}</div>
      <div className="flex items-center overflow-hidden">{cpf}</div>
      <div className="flex items-center overflow-hidden">{phone}</div>
      <div className="flex items-center overflow-hidden">{address}</div>
    </div>
  );
};
