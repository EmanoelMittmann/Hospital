import { Table } from "components/organisms";
import { Layout } from "components/templates";
import { List } from "contexts";
import React from "react";

export const Patient = () => {
  return (
    <List.Patient.Provider>
      <Layout btn={true}>
        <Table.Patients />
      </Layout>
    </List.Patient.Provider>
  );
};
