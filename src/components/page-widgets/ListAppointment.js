import { useState } from "react";
import {
  Typography,
  Grid,
  Paper,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const ListAppointment = ({ appointment }) => {
  const {
    time,
    appointmentType,
    appointmentName,
    patientName,
    appointmentDescription,
  } = appointment;
  const nameHelp = appointmentName + ": " + patientName;
  const backgroundColorSetting =
    appointmentType === "Telehealth"
      ? "linear-gradient(to right, #2BB8F6 0%, #2BB8F6 50%, #F0F2F6 75%)"
      : "linear-gradient(to right, #B2ACFA 0%, #B2ACFA 50%, #F0F2F6 75%)";
  const appointmentTypeColor =
    appointmentType === "Telehealth" ? "#006095" : "#5737E6";

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper
      sx={{
        borderRadius: "16px",
        background: backgroundColorSetting,
      }}
    >
      <Grid container spacing={2} direction="row" sx={{ my: 3 }}>
        <Grid sx={{ padding: "14px 16px 12px 24px" }}>
          <Typography
            variant="h6"
            color="white"
            align="center"
            sx={{
              width: "110px",
              display: "flex",
              justifyContent: "center",
              paddingTop: "5px",
            }}
          >
            {time}
          </Typography>
          <Typography
            variant="body1"
            lineHeight={1}
            color={appointmentTypeColor}
            align="center"
            sx={{ padding: "0 0 2px 0" }}
          >
            {appointmentType}
          </Typography>
        </Grid>
        <Grid
          sx={{ padding: "14px 16px 12px 16px", backgroundColor: "#F0F2F6" }}
        >
          <Typography
            variant="h6"
            sx={{
              width: "270px",
            }}
          >
            {nameHelp}
          </Typography>
          <Typography variant="subtitle2">{appointmentDescription}</Typography>
        </Grid>
        <Grid
          align="flex-end"
          sx={{ width: "42px", backgroundColor: "transparent" }}
        >
          <IconButton
            aria-label="more"
            aria-controls={open ? "appt-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id="appt-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              To Do
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ListAppointment;
