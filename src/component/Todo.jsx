import React, { useState } from 'react'

export default function Todo() {
const [data, setData] = useState([]);
const [add, setAdd] = useState("");

const handleOnChange = (e) => {
    setAdd(e.target.value);
}

const handleAdd = (e) => {
    e.preventDefault();

    if(add) {
        setData([...data, add]);
        setAdd('');
    } else {
        alert("Type something in the Input");
    }
}

const handleDelete = (idx) => {
    setData(data.filter((_, index) => index !== idx));
  }


  return (
    <div>
        <input type="text" value={add} onChange={handleOnChange} />
        <button type='submit' onClick={handleAdd}>Add</button>
        <ul>
        {data.map((ele, idx) => (
            <div key={idx}>
                <li>{ele}</li>
                <button type='submit' onClick={() => handleDelete(idx)}>delete</button>
            </div>
        ))}
        </ul>
    </div>
  )
}
