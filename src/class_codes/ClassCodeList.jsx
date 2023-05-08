import React from "react";
import { Datagrid, List, TextField } from "react-admin";

export const ClassCodeList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="code" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
