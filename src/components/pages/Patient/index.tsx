import { IHandle, Modal } from "components/molecules/Modal";
import { Table } from "components/organisms";
import { Layout } from "components/templates";
import { List } from "contexts";
import { useRef } from "react";

export const Patient = () => {
  const modalRef = useRef<IHandle>(null);
  return (
    <List.Patient.Provider>
      <Layout btn={true} event={() => modalRef.current?.Open(true)}>
        <>
          <Table.Patients />
          <Modal.Create ref={modalRef} />
        </>
      </Layout>
    </List.Patient.Provider>
  );
};
