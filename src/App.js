
import { useEffect, useState } from 'react';
import './App.css';
import DisplayData from './components/DisplayData';
import SearchField from './components/SearchField';

function App() {
  const [ text, setText ] = useState("");
  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  const handleSearch = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="App">
      {/* search field */}
      <SearchField text={text} onSearch={handleSearch} />
      {/* displaying data */}
      <DisplayData data={data} />
    </div>
  );
}

export default App;
