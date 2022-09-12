import React, { useState } from 'react'
import './App.scss'
import { CardList } from './components/CardList';
import { Search } from './components/Search';
import { Sidebar } from './components/Sidebar';
import { ScrollToTop } from './components/ScrollToTop';

const App = () => {
  const [inputData, setInputData] = useState([]);
  const [filteredKeyword, setFilteredKeyword] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const setData = (apps) => {
    setInputData(apps);
  }

  return (
    <div className="container-wrapper">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} inputData={inputData} />
      <div className="container">
        <div className={`app ${isOpen ? `narrow` : `wide`}`}>
          <Search setFilteredKeyword={setFilteredKeyword} />
          <CardList
            setData={setData}
            setFilteredKeyword={filteredKeyword}
          />
        </div>
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
