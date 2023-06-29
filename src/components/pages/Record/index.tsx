import { Layout } from "components/templates";
import React from "react";
import { List, AuthTemplate } from "contexts";
import { Table } from "components/organisms";

export const Record = () => {
  return (
    <List.Patients.Provider>
      <Layout>
        <Table.Records />
      </Layout>
    </List.Patients.Provider>
  );
};
