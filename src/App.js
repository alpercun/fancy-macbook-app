import React, { useEffect, useState } from 'react'
import './App.scss'
import { CardList } from './components/CardList';
import { Input } from './components/Input';
import { Search } from './components/Search';
import { Sidebar } from './components/Sidebar';

const App = () => {
  const [inputData, setInputData] = useState([]);
  const [filteredKeyword, setFilteredKeyword] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log('open', open)
  }, [open]);

  const setData = (apps) => {
    setInputData(apps);
  }

  return (
    <div className="container-wrapper">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="container">
        <div className={`app ${open ? `narrow` : `wide`}`}>
          <Search setFilteredKeyword={setFilteredKeyword} />
          <CardList
            setData={setData}
            setFilteredKeyword={filteredKeyword}
          />
          <Input getData={inputData} />
        </div>
      </div>
    </div>
  );
}

export default App;
