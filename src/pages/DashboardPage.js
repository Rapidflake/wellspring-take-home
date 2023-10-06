import { Helmet, HelmetProvider } from "react-helmet-async";

import useFetch from "../components/FetchData";
import {
  BASE_URL,
  PATIENT_ENDPOINT,
  APPOINTMENTS_ENDPOINT,
} from "../components/FetchConfig";

const DashboardPage = () => {
  const {
    data: patientsData,
    error: patientsError,
    isLoading: patientsLoading,
  } = useFetch(BASE_URL, PATIENT_ENDPOINT);

  const {
    data: appointmentsData,
    error: appointmentsError,
    isLoading: appointmentsLoading,
  } = useFetch(BASE_URL, APPOINTMENTS_ENDPOINT);

  if (patientsLoading) {
    return <div>Loading ...</div>;
  }
  if (patientsError) {
    return <div>{patientsError}</div>;
  }
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Wellspring | Home</title>
        </Helmet>
      </HelmetProvider>
      <div className="App">
        <header className="App-header">
          <p>
            {patientsData.length > 0 && (
              <ul>
                {patientsData.map((user) => (
                  <li key={user.id}>{user.patientName}</li>
                ))}
              </ul>
            )}
          </p>
        </header>
      </div>
    </>
  );
};

export default DashboardPage;
