
import { useState } from 'react';
import { Books } from '../Data/Books';
import Table from "../Table.js";
import './App.css';

function App() {

  const [query, setQuery] = useState("");

  const keys = ["title_books", "writer_book", "genre"];

  const search = (data) => {
    return data.filter((item) =>  
    item.title_book.toLowerCase().includes(query) || 
    item.writer_book.toLowerCase().includes(query) || 
    item.genre.toLowerCase().includes(query)
)
  }
  return (
  
    <div className="App">
      <input type="text" placeholder="Search..." className="search" onChange={(e)=> setQuery(e.target.value)}/>
      <Table data={search(Books)}/>
    </div>
  );
}

export default App;
