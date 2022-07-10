import React, { useState } from 'react'
import './App.scss'
import { CardList } from './components/CardList';
import { Input } from './components/Input';
import { Search } from './components/Search';

const App = () => {
  const [inputData, setInputData] = useState([]);
  const [filteredKeyword, setFilteredKeyword] = useState('');

  const setData = (apps) => {
    setInputData(apps);
  }

  return (
    <div className="container">
      <div className="app">
        <Search setFilteredKeyword={setFilteredKeyword} />
        <CardList
          setData={setData}
          setFilteredKeyword={filteredKeyword}
        />
        <Input getData={inputData} />
      </div>
    </div>

  );
}

export default App;
