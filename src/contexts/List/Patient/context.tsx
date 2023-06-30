import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { ContextProps, PatientProps } from "./types";
import api from "api";

export const Context = createContext({} as ContextProps);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [patient, setPatient] = useState<PatientProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetch = useCallback(async () => {
    try {
      const { data } = await api.get("/Records");
      setPatient(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, []);

  const handleCreate = async (data: PatientProps) => {
    try {
      await api.post("/Records", data);
      fetch();
      setIsLoading(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (data: PatientProps) => {
    try {
      await api.put("/Records", data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/Record?id=${id}`);
      fetch();
      setIsLoading(true);
    } catch (error) {
      console.error(error);
    }
  };

  const contextProps = {
    patient,
    isLoading,
    handleCreate,
    handleEdit,
    handleDelete,
  };

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <Context.Provider value={contextProps}>
      <>{children}</>
    </Context.Provider>
  );
};
