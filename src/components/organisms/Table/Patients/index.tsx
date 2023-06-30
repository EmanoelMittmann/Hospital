import { useMemo, useContext, useRef } from "react";
import { Header } from "./contants";
import { List } from "contexts";
import { Shelf } from "./shelf";
import { Ihandle, Modal } from "components/molecules/Modal";
import { PatientProps } from "contexts/List/Patient/types";

export const Patients = () => {
  const { patient, isLoading } = useContext(List.Patient.Context);
  const ref = useRef<Ihandle>(null);

  const Options = (data: PatientProps) => [
    {
      label: "Editar",
      callback: () => ref.current?.Open(data),
    },
  ];

  const Table = useMemo(() => {
    if (isLoading) <>Loading...</>;

    return patient.map((props) => (
      <Shelf props={props} config={{ options: Options(props) }} />
    ));
  }, [isLoading]);

  return (
    <div className="w-full ">
      <div className="w-full h-10 px-2 py-2 m-auto grid grid-cols-5 border-2 rounded-md bg-gray-100">
        {Header.map(({ field }) => (
          <div className="flex items-center gap-4 text-gray-600 font-medium rounded-md font-['Poppins'] text-sm">
            {field}
          </div>
        ))}
      </div>
      <Modal.Edit ref={ref} />
      {Table}
    </div>
  );
};
