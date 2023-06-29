export interface ContextProps {
  patient: PatientProps[];
  isLoading: boolean;
  handleCreate(data: PatientProps): void;
  handleEdit(data: PatientProps): void;
  handleDelete(id: number): void;
}

export interface PatientProps {
  id: number;
  avatar?: string;
  namePatient: string;
  cpf: string;
  phone: string;
  address: string;
}
