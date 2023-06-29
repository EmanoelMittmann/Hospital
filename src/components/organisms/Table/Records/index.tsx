import { useContext, useMemo } from "react";
import { Header } from "./constant";
import { List } from "contexts";
import { Shelf } from "./shelf";

export const Records = () => {
  const { records, isLoading } = useContext(List.Patients.Context);
  console.log("records: ", records);

  const Table = useMemo(() => {
    if (isLoading) return <>Loading...</>;
    return records.map((itens) => <Shelf props={itens} key={itens.id} />);
  }, [isLoading]);

  return (
    <div className="w-full mt-40">
      <div className="w-full h-10 px-2 py-2 m-auto grid grid-cols-4 border-2 rounded-md bg-gray-100">
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
