import { Default, Create as Button, IconClose } from "components/atoms";
import { List } from "contexts";
import { PatientProps } from "contexts/List/Patient/types";
import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  ChangeEvent,
  useContext,
  useCallback,
} from "react";

export interface Ihandle {
  Open(_: PatientProps): void;
  Close(): void;
}

export const Edit = forwardRef<Ihandle, any>((props, ref) => {
  const [isOpen, setIsOpen] = useState<PatientProps | null>(null);

  const { handleEdit } = useContext(List.Patient.Context);

  useImperativeHandle(
    ref,
    () => ({
      Open: (data) => setIsOpen(data),
      Close,
    }),
    []
  );

  const Close = useCallback(() => {
    setIsOpen(null);
  }, []);

  if (isOpen === null) return null;
  return (
    <div>
      <div className="w-2/5 h-80 rounded absolute bg-white flex top-2/4 left-2/4 z-20 shadow-xl -translate-x-1/4 -translate-y-2/4">
        <form
          onSubmit={() => handleEdit(isOpen)}
          className="flex flex-col w-full py-10 justify-center gap-10"
        >
          <div className="w-full flex flex-row gap-4 px-4 justify-between">
            <h2 className="font-['Poppins'] font-bold">Editar Ficha</h2>
            <IconClose onClick={() => Close()} className="cursor-pointer" />
          </div>
          <div className="w-full flex flex-row gap-4 px-4">
            <Default
              placeholder="Nome do Paciente"
              name="NamePatient"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setIsOpen({ ...isOpen, namePatient: e.target.value })
              }
              value={isOpen.namePatient}
            />
            <Default
              placeholder="Cpf"
              type="number"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setIsOpen({ ...isOpen, cpf: e.target.value })
              }
              id="cpf"
              name="CPF"
              value={isOpen.cpf}
            />
          </div>
          <div className="w-full flex flex-row gap-4 px-4">
            <Default
              placeholder="Numero"
              name="Phone"
              value={isOpen.phone}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setIsOpen({ ...isOpen, phone: e.target.value })
              }
            />
            <Default
              placeholder="Endereço"
              name="Address"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setIsOpen({ ...isOpen, address: e.target.value })
              }
              value={isOpen.address}
            />
          </div>
          <div className="w-full flex flex-row justify-end gap-4 px-6">
            <Button text="Editar" type="submit" />
          </div>
        </form>
      </div>
      <div className="fixed top-0 left-0 w-full min-h-full overflow-auto z-10 backdrop-blur-sm"></div>
    </div>
  );
});
