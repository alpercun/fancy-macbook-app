import React, { useState } from 'react'
import './App.scss'
import { CardList } from './components/CardList';
import { Input } from './components/Input';

const App = () => {
  const [inputData, setInputData] = useState([]);

  const setData = (apps) => {
    setInputData(apps);
  }

  return (
    <div className="container">
      <div className="app">
        <CardList setData={setData} />
        <Input getData={inputData} />
      </div>
    </div>

  );
}

export default App;
