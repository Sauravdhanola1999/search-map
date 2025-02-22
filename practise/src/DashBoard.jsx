import React, { useContext } from "react";
import { globalContext } from "./Appointment";

const DashBoard = () => {
  const { loading, appointments } = useContext(globalContext);
  if (loading) {
    return <p>I am Loading Right Now</p>;
  }

  return (
    <div>
      <h1>Appointments</h1>
      {appointments &&
        appointments.map((appoint, index) => (
          <li key={index}>
            {appoint.doctorId} Date{" "}
            {new Date(appoint.appointmentDate).toLocaleString()}
          </li>
        ))}
    </div>
  );
};

export default DashBoard;
