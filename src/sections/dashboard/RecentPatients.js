import { Stack, Divider } from "@mui/material";

import useFetch from "../../components/fetch/FetchData";
import ListPatient from "../../components/page-widgets/ListPatient";
import { BASE_URL, PATIENT_ENDPOINT } from "../../components/fetch/FetchConfig";

const descSortByProperty = (arr, property) => {
  return arr.sort((a, b) => {
    if (a[property] < b[property]) {
      return 1;
    }
    if (a[property] > b[property]) {
      return -1;
    }
    return 0;
  });
};

const RecentPatients = () => {
  const { data, error, isLoading } = useFetch(BASE_URL, PATIENT_ENDPOINT);
  const recent = descSortByProperty(data, "lastCheckIn").slice(0, 5);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <Stack spacing={2} sx={{ py: 2 }}>
      {recent.map((patient) => (
        <>
          <ListPatient key={patient.id} patient={patient} />
          <Divider />
        </>
      ))}
    </Stack>
  );
};

export default RecentPatients;
