import React, { createContext, useEffect, useState } from "react";
import DashBoard from "./DashBoard";
import axios from "axios";

const globalAppointmet = createContext();

const Appointment = () => {
  const [appointments, setAppointments] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get("./data.json");
      setAppointments(response.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <globalAppointmet.Provider value={{appointments, loading}}> 
      <div>
        <DashBoard />
      </div>
    </globalAppointmet.Provider>
  );
};

export  {Appointment, globalAppointmet};
