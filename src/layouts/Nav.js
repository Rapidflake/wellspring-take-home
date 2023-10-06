import { useLocation } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

import logo from "../assets/icons/logo.png";
import homeLine from "../assets/icons/homeLine.png";
import heartHand from "../assets/icons/heartHand.png";

export const DRAWER_WIDTH = 240;
const CustomToolbar = styled(Toolbar)(({ height }) => ({
  height: height,
}));

const Sidebar = () => {
  const location = useLocation();

  const CustomNavItem = ({ to, text, imgAddress }) => (
    <li id="nav-item" className={location.pathname === to ? "active" : ""}>
      <img className="icon" src={imgAddress} />
      <a href={to}>{text}</a>
    </li>
  );

  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
          borderWidth: 0,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <CustomToolbar />
      <ListItem className="logo">
        <img src={logo} alt="logo" />
        <div className="title">Wellspring</div>
      </ListItem>
      <CustomToolbar height="100px" />
      <nav className="navbar">
        <CustomNavItem to="/" text="Home" imgAddress={homeLine} />
        <CustomNavItem to="/patients" text="Patients" imgAddress={heartHand} />
      </nav>
    </Drawer>
  );
};

export default Sidebar;
