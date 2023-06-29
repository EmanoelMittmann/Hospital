export interface ContextProps {
  records: RecordsProps[];
  isLoading: boolean;
}

export interface RecordsProps {
  id: number;
  avatar?: string;
  namePatient: string;
  cpf: string;
  phone: string;
  address: string;
}
