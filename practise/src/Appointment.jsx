import React, { createContext, useEffect, useState } from "react";
import DashBoard from "./DashBoard";
import axios from 'axios'

const globalContext = createContext()

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchData = async () => {
    try {
      const response = await axios.get("/data.json");
      console.log(response.data)
      setAppointments(response.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <globalContext.Provider value={{appointments, loading}}>
      <DashBoard />
    </globalContext.Provider>
  );
};

export {Appointment, globalContext};
