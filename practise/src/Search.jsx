import React, { useState } from "react";

const users = [
  { id: 1, name: "John Doe", email: "johndoe@example.com" },
  { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
  { id: 3, name: "Mike Johnson", email: "mikej@example.com" },
  { id: 4, name: "Emily Davis", email: "emilyd@example.com" },
];

const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  const filterData = users.filter((user) => {
    return user.name.toLowerCase().includes(searchItem.toLowerCase());
  });
  return (
    <div>
      <h2>Search Filter</h2>
      <input
        type="text"
        placeholder="Search Your Desired Person"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      {searchItem &&
        (filterData.length > 0
          ? filterData.map((user) => (
              <ul>
                <li>
                  {user.name} and {user.email}
                </li>
              </ul>
            ))
          : "No user Found")}
    </div>
  );
};

export default Search;
