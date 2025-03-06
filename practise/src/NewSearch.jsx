import React, { useEffect, useState } from 'react'



const data = [
    { "id": 1, "name": "Item One", "visible": true },
    { "id": 2, "name": "Item Two", "visible": false },
    { "id": 3, "name": "Item Three", "visible": true },
    { "id": 4, "name": "Item Four", "visible": true }
  ];
  

const NewSearch = () => {

    const [search, setSearch] = useState('');

    

        let results = data.filter((item)=>{
            return item.visible && item.name.toLowerCase().includes(search.toLowerCase());
        })

  return (
    <div>
        <h1>Seach Things</h1>
        <input type="text" placeholder='enter the terms' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <ul>
            {results.length > 0 ? (
                results.map((item, index)=>(
                    <li key={index}>{item.name}</li>
                ))
            ):(
                <p>No rsults Found</p>
            )}
        </ul>
    </div>
  )
}

export default NewSearch