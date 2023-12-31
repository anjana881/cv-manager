import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import Applicants from "./components/Applicants";
import Interviews from "./components/Interviews";
import Assessment from "./components/Assessment";
import DashboardContent from "./components/DashboardContent";
import Profile from "./components/Profile";
import ShortlistCandidate from "./components/ShortlistCandidate";

import Calendar1 from "./components/Calendar1";
import OfferLetter from "./components/OfferLetter";

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
        path: "shortlisted",
        element: <ShortlistCandidate />,
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
      {
        path: "offer",
        element: <OfferLetter />,
      },
      {
        path: "calendar",
        element: <Calendar1 />,
      },
    ],
  },
]);

export default route;
