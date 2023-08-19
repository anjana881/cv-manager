import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import Applicants from "./components/Applicants";
import Interviews from "./components/Interviews";
import Assessment from "./components/Assessment";
import DashboardContent from "./components/DashboardContent";
import Profile from "./components/Profile";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <DashboardContent />,
      },
      {
        path: "applicants",
        element: <Applicants />,
      },
      {
        path: "profile/:serialNumber",
        element: <Profile />,
      },

      {
        path: "interviews",
        element: <Interviews />,
      },

      {
        path: "assessments",
        element: <Assessment />,
      },
    ],
  },
]);

export default route;
