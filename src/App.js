
import { useEffect, useState } from 'react';
import './App.css';
import DisplayData from './components/DisplayData';

function App() {
  const [ text, setText ] = useState("");
  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  return (
    <div className="App">
      <h1>Assignment</h1>
      <DisplayData data={data} />
    </div>
  );
}

export default App;
