
import { useEffect, useState } from 'react';
import './App.css';
import DisplayData from './components/DisplayData';
import SearchField from './components/SearchField';
import Header from './components/Header';
import PaginatedData from './components/PaginatedData';

function App() {
  const [ text, setText ] = useState("");
  const [ data, setData ] = useState([]);
  console.log(text);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  const handleSearch = (e) => {
    e.preventDefault();
    setText(e.target.value);
    console.log(e.target.value);
  }

  const searchedData = data.filter((item) =>
    item.name.toLowerCase().startsWith(text.toLowerCase())
  );


  return (
    <div className="App">
      <Header />
      {/* search field */}
      <SearchField text={text} onSearch={handleSearch} />
      {/* displaying all data */}
      {/* <DisplayData data={data} /> */}
      {/* <hr /> */}
      {/* paginated data */}
      <PaginatedData data={data} text={text} />
    </div>
  );
}

export default App;
