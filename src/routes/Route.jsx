import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { UserProvider } from "../context/UserContext";
import Login from "../screen/login";
import SignUp from "../screen/signUp";
import Dashboard from "../screen/dashboard";
import DoctorPrescriptionProfile from "../screen/doctorPrescriptionProfile";
import GeneratePrescription from "../screen/generatePrescription";

import AllPatients from "../screen/allPatients";
import PrescriptionArchive from "../screen/prescriptionArchive";
import AppointedPatients from "../screen/appointedPatients";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <UserProvider>
        <Dashboard />
      </UserProvider>
    ),
  },
  {
    path: "/doctor-prescription-profile",
    element: (
      <UserProvider>
        <DoctorPrescriptionProfile />
      </UserProvider>
    ),
  },
  {
    path: "/generate-Prescription",
    element: (
      <UserProvider>
        <GeneratePrescription />
      </UserProvider>
    ),
  },
  {
    path: "/appointed-Patients",
    element: (
      <UserProvider>
        <AppointedPatients />
      </UserProvider>
    ),
  },
  {
    path: "/all-Patient",
    element: (
      <UserProvider>
        <AllPatients />
      </UserProvider>
    ),
  },
  {
    path: "/prescription-Archive",
    element: (
      <UserProvider>
        <PrescriptionArchive />
      </UserProvider>
    ),
  },
]);

export default router;
