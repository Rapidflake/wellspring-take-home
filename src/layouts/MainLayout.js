import { Outlet } from "react-router-dom";
import {Grid, Box, CssBaseline, AppBar} from "@mui/material";

import CustomToolbar from "../components/page-widgets/Toolbar";
import Sidebar from "./Nav";
import DRAWER_WIDTH from "./Nav";

const MainLayout = () => {
  return (
    <Grid sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />

      {/* AppBar can be used for future features like login, notifications */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${DRAWER_WIDTH}px)`,
          ml: `${DRAWER_WIDTH}px`,
        }}
      ></AppBar>
      <Box
        component="main"
        height="100vh"
        sx={{
          flexGrow: 1,
          backgroundColor: "#FCFCFD",
          p: 5,
          width: `calc(100% - ${DRAWER_WIDTH}px)`,
        }}
      >
        <CustomToolbar />
        <Outlet />
      </Box>
    </Grid>
  );
};

export default MainLayout;
