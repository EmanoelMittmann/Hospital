import { useMemo, useContext } from "react";
import { Header } from "./contants";
import { List } from "contexts";
import { Shelf } from "./shelf";

export const Patients = () => {
  const { patient, isLoading } = useContext(List.Patient.Context);

  const Table = useMemo(() => {
    if (isLoading) <>Loading...</>;

    return patient.map((props) => <Shelf props={props} />);
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
      {Table}
    </div>
  );
};
