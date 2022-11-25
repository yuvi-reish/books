import React, { useEffect, useState } from 'react';
import './searchBar/SearchBar'
import SearchBar from './searchBar/SearchBar';


const App = () => {

  const [books, setBooks] = useState([])
  const [searchValue, setSearchValue] = useState("")
  console.log(searchValue);
  const fetchFromApiBooks = () => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=${searchValue}')
      .then(res => res.json())
      .then(data => setBooks(data))
  }

  useEffect(() => {
    if (searchValue.length >= 3) {
      fetchFromApiBooks();
    }
  }, [searchValue]);


  return (

    <div>
      <ul>Wellcom to my project</ul>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}>
      </SearchBar>

      {books.map((book) => (
        <p>{book.id}</p>
      ))}


    </div>


  )
}

export default App

