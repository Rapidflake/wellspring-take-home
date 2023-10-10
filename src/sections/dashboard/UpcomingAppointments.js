import { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";

import useFetch from "../../components/fetch/FetchData";
import ListAppointment from "../../components/page-widgets/ListAppointment";
import {
  BASE_URL,
  APPOINTMENTS_ENDPOINT,
} from "../../components/fetch/FetchConfig";

const TabPanel = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`tabpanel-${index}`}
    aria-labelledby={`tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
);

const a11yProps = (index) => ({
  id: `tab-${index}`,
  "aria-controls": `tabpanel-${index}`,
});

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}/${month}/${day}`;
};

const getToday = () => {
  return formatDate(new Date());
};

const getTomorrow = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  return formatDate(currentDate);
};

const getThisWeek = () => {
  const currentDate = new Date();
  const first = currentDate.getDate() - currentDate.getDay();
  const firstday = new Date(currentDate.setDate(first)).getTime();
  const lastday = new Date(currentDate.setDate(first + 6)).getTime();
  return [firstday, lastday];
};

const UpcomingAppointments = () => {
  const [value, setValue] = useState(0);
  const { data, error, isLoading } = useFetch(BASE_URL, APPOINTMENTS_ENDPOINT);

  const appointmentToday = data.filter((el) => {
    return el.appointmentDate === getToday();
  });

  const appointmentTomorrow = data.filter((el) => {
    return el.appointmentDate === getTomorrow();
  });

  const appointmentThisWeek = data.filter((el) => {
    const thisWeek = getThisWeek();
    return (
      new Date(el.appointmentDate).getTime() >= thisWeek[0] &&
      new Date(el.appointmentDate).getTime() <= thisWeek[1]
    );
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box direction="row" spacing={3}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="data tabs"
            centered
            TabIndicatorProps={{
              style: { display: "none" },
            }}
            sx={{ minHeight: "32px", height: "32px" }}
          >
            <Tab
              disableRipple
              label="Today"
              sx={{
                backgroundColor: "#F0F2F6",
                padding: "0 10px",
                margin: "0 10px",
                border: "none",
                borderRadius: "16px",
                minHeight: "32px",
                height: "32px",
                "&.Mui-selected": {
                  backgroundColor: "#EEF8FF",
                },
              }}
              {...a11yProps(0)}
            />
            <Tab
              disableRipple
              label="Tomorrow"
              sx={{
                backgroundColor: "#F0F2F6",
                padding: "0 10px",
                margin: "0 10px",
                border: "none",
                borderRadius: "16px",
                minHeight: "32px",
                height: "32px",
                "&.Mui-selected": {
                  backgroundColor: "#EEF8FF",
                },
              }}
              {...a11yProps(1)}
            />
            <Tab
              disableRipple
              label="This Week"
              sx={{
                backgroundColor: "#F0F2F6",
                padding: "0 10px",
                margin: "0 10px",
                border: "none",
                borderRadius: "16px",
                minHeight: "32px",
                height: "32px",
                "&.Mui-selected": {
                  backgroundColor: "#EEF8FF",
                },
              }}
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {appointmentToday.map((appointment) => (
            <ListAppointment key={appointment.id} appointment={appointment} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {appointmentTomorrow.map((appointment) => (
            <ListAppointment key={appointment.id} appointment={appointment} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {appointmentThisWeek.map((appointment) => (
            <ListAppointment key={appointment.id} appointment={appointment} />
          ))}
        </TabPanel>
      </Box>
    </>
  );
};

export default UpcomingAppointments;
