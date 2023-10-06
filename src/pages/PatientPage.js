import { Helmet, HelmetProvider } from "react-helmet-async";

import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

import useFetch from "../components/FetchData";
import { BASE_URL, PATIENT_ENDPOINT } from "../components/FetchConfig";

const TABLE_HEADER = [
  {
    field: "patientName",
    headerName: "Patient Name",
    headerClassName: "MuiDataGrid-columnHeaderTitle",
    minWidth: 170,
  },
  {
    field: "caregiverName",
    headerName: "Care Giver Name",
    headerClassName: "MuiDataGrid-columnHeaderTitle",
    minWidth: 170,
  },
  {
    field: "visitStatus",
    headerName: "Visit Status",
    headerClassName: "MuiDataGrid-columnHeaderTitle",
    minWidth: 200,
  },
  {
    field: "lastCheckIn",
    headerName: "Last Check-In",
    headerClassName: "MuiDataGrid-columnHeaderTitle",
    minWidth: 160,
  },
];

const PatientsTable = () => {
  const { data, error, isLoading } = useFetch(BASE_URL, PATIENT_ENDPOINT);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Wellspring | Patients</title>
        </Helmet>
      </HelmetProvider>
      <Paper sx={{ width: 760, mb: 2 }}>
        <DataGrid
          rows={data}
          columns={TABLE_HEADER}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          sx={{
            ".MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold !important",
              overflow: "visible !important",
            },
          }}
        />
      </Paper>
    </>
  );
};

export default PatientsTable;
