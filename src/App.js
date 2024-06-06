
import { useEffect, useState } from 'react';
import './App.css';
import SearchField from './components/SearchField';
import Header from './components/Header';
import PaginatedData from './components/PaginatedData';
import Footer from './components/Footer';

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
      { text.length === 0 ? <PaginatedData data={data} text={text} />: searchedData.length > 0 ? <PaginatedData data={searchedData} text={text} /> : "No Data Found"}
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
