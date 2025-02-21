import React, { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const Fetch = () => {
    const [users, setUsers]= useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError]= useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch Users");
        }
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
       setError(error.message);
      }
      finally{
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Fetching Data</h1>
     {loading && <p>Loading...</p>}
     {error && <p>{error}</p>}
     {
        !loading && !error && (
            <ul>
                {users.map((user, index)=>(
                    <li key={index}>{user.name} and {user.email}</li>
                ))}
            </ul>
        )
     }
    </div>
  );
};

export default Fetch;
