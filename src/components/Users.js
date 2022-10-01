import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Stack } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "email", headerName: "Email", width: 200 },
];

const Users = ({ users }) => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <Stack direction="row" justifyContent="space-between">
            <Button variant="outlined" color="success" sx={{ width: "45%" }}>
              Edit
            </Button>
            <Button variant="outlined" color="error" sx={{ width: "45%" }}>
              Delete
            </Button>
          </Stack>
        );
      },
    },
  ];
  return (
    <div style={{ height: 400, width: "100%", margin: 0 }}>
      <DataGrid
        rows={users}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Users;
