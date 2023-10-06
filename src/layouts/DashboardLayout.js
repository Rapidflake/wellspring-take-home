import { Outlet } from "react-router-dom";

import Grid from '@mui/material/Grid';
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from '@mui/material/Box';
import Toolbar from "@mui/material/Toolbar";

import Sidebar from "./Nav";
import DRAWER_WIDTH from "./Nav"

const DashboardLayout = () => {
  return (
    <Grid sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />

      {/* AppBar can be used for future features like login, notifications */}
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${DRAWER_WIDTH}px)`, ml: `${DRAWER_WIDTH}px` }}
      ></AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "#FCFCFD", p: 3 }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Grid>
  );
};

export default DashboardLayout;
