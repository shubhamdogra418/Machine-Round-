import './App.css';
import { useEffect, useState } from 'react';
import Card from './Card';

function App() {
  const URL="https://jsonplaceholder.typicode.com/posts";
  const getData = async () => {
    const data= await fetch(URL);
    const json= await data.json();
    console.log(json[0]);
    setShowData(json);
  }

  const [showData, setShowData] = useState([]);
  console.log("show data is ", showData);

  useEffect (() => {
    getData();
  },[])
  
  return (
    <div className="App">
      { showData.map((onecard) => <Card showData ={onecard}/> )}
      
    </div>
  );
}

export default App;
