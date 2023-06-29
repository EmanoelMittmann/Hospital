import { PatientProps } from "contexts/List/Patient/types";
import { ShelfProps } from "../types";
import { useContext } from "react";
import { IconEdit } from "components/atoms";
import { IconTrash } from "components/atoms/Icon/IconTrash";
import { List } from "contexts";

export const Shelf = ({ props }: ShelfProps<PatientProps>) => {
  const { address, cpf, namePatient, phone } = props;

  const { handleDelete, handleEdit } = useContext(List.Patient.Context);

  return (
    <div className="grid grid-cols-5 items-center py-6 px-3 rounded border-2 overflow-auto">
      <div className="flex items-center overflow-hidden">{namePatient}</div>
      <div className="flex items-center overflow-hidden">{cpf}</div>
      <div className="flex items-center overflow-hidden">{phone}</div>
      <div className="flex items-center overflow-hidden">{address}</div>
      <div className="flex items-center overflow-hidden gap-4">
        <IconEdit className="cursor-pointer" onClick={() => {}} />
        <IconTrash
          className="cursor-pointer"
          onClick={() => handleDelete(props.id)}
        />
      </div>
    </div>
  );
};
