import { Layout } from "components/templates";
import React from "react";
import { List, AuthTemplate } from "contexts";
import { Table } from "components/organisms";

export const Record = () => {
  return (
    <List.Records.Provider>
      <Layout>
        <Table.Records />
      </Layout>
    </List.Records.Provider>
  );
};
