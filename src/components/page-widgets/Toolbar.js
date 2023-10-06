import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

const CustomToolbar = styled(Toolbar)(({ height }) => ({
  height: height,
}));

export default CustomToolbar;
