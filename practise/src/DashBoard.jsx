import React, { useContext } from "react";
import { globalAppointmet } from "./Appointment";

const DashBoard = () => {
  const { loading, appointments } = useContext(globalAppointmet);
  if (loading) {
    return <p>I am Loading Wait... Until Data is fetched....</p>;
  }
  return (
    <div>
      <h1>Doctor Appointments</h1>
      {appointments &&
        appointments.map((appoint, index) => (
          <li key={index}>
            Doctor I'd {appoint.doctorId} and{" "}
            {new Date(appoint.appointmentDate).toLocaleString()}
          </li>
        ))}
    </div>
  );
};

export default DashBoard;
