import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { ContextProps, RecordsProps } from "./types";
import api from "api";
import { mock } from "./mock";

export const Context = createContext({} as ContextProps);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [records, setRecords] = useState<RecordsProps[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  const contextProps = {
    records,
    isLoading,
  };

  const fetchRecords = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get("/Records");
      setRecords(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  return (
    <Context.Provider value={contextProps}>
      <>{children}</>
    </Context.Provider>
  );
};
