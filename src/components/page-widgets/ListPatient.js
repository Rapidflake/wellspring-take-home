import { Box, Stack, Typography } from "@mui/material";

const checkStatus = (status) => {
  const colorArray = {};
  switch (status.toLowerCase()) {
    case "started training":
      colorArray.textColor = "#116E42";
      colorArray.bgColor = "#E9FDF2";
      break;
    case "missing documentation":
      colorArray.textColor = "#AC3E16";
      colorArray.bgColor = "#FFF9E9";
      break;
    default:
      colorArray.textColor = "#2D3849";
      colorArray.bgColor = "#F0F2F6";
  }
  return colorArray;
};

const ListPatient = ({ patient }) => {
  const { patientName, caregiverName, visitStatus } = patient;

  const textColor = checkStatus(visitStatus).textColor;
  const bgColor = checkStatus(visitStatus).bgColor;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Typography fontSize="16px" fontWeight="600" noWrap>
          {patientName}
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
          {caregiverName}
        </Typography>
      </Box>
      <Typography
        variant="caption"
        align="right"
        fontWeight="600"
        sx={{
          padding: "4px 8px",
          color: textColor,
          textTransform: "capitalize",
          backgroundColor: bgColor,
          borderRadius: "16px",
        }}
      >
        {visitStatus}
      </Typography>
    </Stack>
  );
};

export default ListPatient;
