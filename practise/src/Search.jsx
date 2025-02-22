import React, { useState } from "react";

let users = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    education: "Bachelor of Science in Computer Science",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    education: "Master of Business Administration",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mikej@example.com",
    education: "Bachelor of Arts in Psychology",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emilyd@example.com",
    education: "Doctor of Medicine",
  },
  {
    id: 5,
    name: "Robert Brown",
    email: "robertb@example.com",
    education: "Bachelor of Science in Mechanical Engineering",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    email: "sarahw@example.com",
    education: "Master of Science in Data Science",
  },
  {
    id: 7,
    name: "David Lee",
    email: "davidl@example.com",
    education: "Bachelor of Commerce in Finance",
  },
  {
    id: 8,
    name: "Laura Martinez",
    email: "lauram@example.com",
    education: "PhD in Biochemistry",
  },
  {
    id: 9,
    name: "James Anderson",
    email: "jamesa@example.com",
    education: "Master of Arts in Political Science",
  },
  {
    id: 10,
    name: "Olivia Thomas",
    email: "oliviat@example.com",
    education: "Bachelor of Fine Arts in Graphic Design",
  },
];

const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  const filterData = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchItem.toLowerCase()) ||
      user.education.toLowerCase().includes(searchItem.toLowerCase())
    );
  });
  return (
    <div>
      <h1>Search Info</h1>
      <input
        type="text"
        placeholder="Search......."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      {searchItem && filterData.length > 0
        ? filterData.map((u, index) => (
            <li key={index}>
              Candidate is {u.name}, email: {u.email}, Education: {u.education}
            </li>
          ))
        : searchItem && <p>No results found for "{searchItem}"</p>}
    </div>
  );
};

export default Search;
