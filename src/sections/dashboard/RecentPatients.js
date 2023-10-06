import {
  Box,
  Stack,
  Link,
  Divider,
  Typography,
} from "@mui/material";

import useFetch from "../../components/fetch/FetchData";
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

const NewsItem = ({ news }) => {
  const { patientName, caregiverName, visitStatus } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
          {patientName}
        </Link>

        <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
          {caregiverName}
        </Typography>
      </Box>

      <Typography
        variant="caption"
        sx={{ pr: 3, flexShrink: 0, color: "text.secondary" }}
      >
        {visitStatus}
      </Typography>
    </Stack>
  );
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
      {recent.map((news) => (
        <>
          <NewsItem key={news.id} news={news} />
          <Divider />
        </>
      ))}
    </Stack>
  );
};

export default RecentPatients;
