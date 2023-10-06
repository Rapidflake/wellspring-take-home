import { Navigate, useRoutes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import PatientPage from "./pages/PatientPage";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: "home", element: <DashboardPage /> },
        { path: "patients", element: <PatientPage /> },
      ],
    },
  ]);

  return routes;
}
