import { Paper, Grid, Divider, Typography, Box, Button } from "@mui/material";

import PageTitle from "../components/page-widgets/PageTitle";
import RecentPatients from "../sections/dashboard/RecentPatients";

const DashboardPage = () => {
  return (
    <>
      <PageTitle title={"Home | Wellspring"} />
      <Typography variant="h3" gutterBottom sx={{ pb: 4 }}>
        Good Morning
      </Typography>
      <Grid container spacing={2}>
        <Paper
          elevation={2}
          sx={{ minWidth: 600, mb: 2, mx: 2, p: 4, borderRadius: "16px" }}
        >
          <Box className="content-card">
            <h2 className="card">Recent Patients</h2>
            <Button size="small" color="inherit" href="/patients">
              View all
            </Button>
          </Box>
          <Divider sx={{ borderBottomWidth: 3 }} />
          <RecentPatients />
        </Paper>
        <Paper
          elevation={2}
          sx={{ minWidth: 600, mb: 2, mx: 2, p: 4, borderRadius: "16px" }}
        >
          <Box className="content-card">
            <h2 className="card">Appointments</h2>
          </Box>
          <Divider sx={{ borderBottomWidth: 3 }} />
          
        </Paper>
      </Grid>
    </>
  );
};

export default DashboardPage;
