import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

import PageTitle from "../components/page-widgets/PageTitle";
import useFetch from "../components/fetch/FetchData";
import { BASE_URL, PATIENT_ENDPOINT } from "../components/fetch/FetchConfig";

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
    return (
      <>
        <PageTitle title={"Patients | Wellspring"} />
        <div>Loading...</div>
      </>
    );
  }
  if (error) {
    return (
      <>
        <PageTitle title={"Patients | Wellspring"} />
        <div>{error}</div>
      </>
    );
  }
  return (
    <>
      <PageTitle title={"Patients | Wellspring"} />

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
