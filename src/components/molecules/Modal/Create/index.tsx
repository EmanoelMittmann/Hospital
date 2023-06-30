import { Default, Create as Button, IconClose } from "components/atoms";
import { List } from "contexts";
import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  ChangeEvent,
  useContext,
  useCallback,
} from "react";

export interface IHandle {
  Open(_: boolean): void;
  Close(): void;
}

export const Create = forwardRef<IHandle, any>((props, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { handleCreate } = useContext(List.Patient.Context);

  useImperativeHandle(
    ref,
    () => ({
      Open: () => setIsOpen(true),
      Close,
    }),
    []
  );

  const Close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const dataFromForm = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {} as any;
    Array.prototype.forEach.call(e.target.elements, (elements) => {
      if (elements.name) data[elements.name] = elements.value;
    });
    data["id"] = Math.floor(Math.random() * 100);
    handleCreate(data);
    Close();
  };

  if (!isOpen) return null;
  return (
    <div>
      <div className="w-2/5 h-80 rounded absolute bg-white flex top-2/4 left-2/4 z-20 shadow-xl -translate-x-1/4 -translate-y-2/4">
        <form
          onSubmit={(e: ChangeEvent<HTMLFormElement>) => dataFromForm(e)}
          className="flex flex-col w-full py-10 justify-center gap-10"
        >
          <div className="w-full flex flex-row gap-4 px-4 justify-between">
            <h2 className="font-['Poppins'] font-bold">Criar Ficha</h2>
            <IconClose onClick={() => Close()} className="cursor-pointer" />
          </div>
          <div className="w-full flex flex-row gap-4 px-4">
            <Default placeholder="Nome do Paciente" name="NamePatient" />
            <Default placeholder="Cpf" type="number" id="cpf" name="CPF" />
          </div>
          <div className="w-full flex flex-row gap-4 px-4">
            <Default placeholder="Numero" name="Phone" />
            <Default placeholder="Endereço" name="Address" />
          </div>
          <div className="w-full flex flex-row justify-end gap-4 px-6">
            <Button text="Criar" type="submit" />
          </div>
        </form>
      </div>
      <div className="fixed top-0 left-0 w-full min-h-full overflow-auto z-10 backdrop-blur-sm"></div>
    </div>
  );
});
