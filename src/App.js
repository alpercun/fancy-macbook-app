import React, { useState } from 'react'
import './App.scss'
import { CardList } from './components/CardList';
import { Search } from './components/Search';
import { Sidebar } from './components/Sidebar';
import { SearchItemList } from './components/SearchItemList';
import { ScrollToTop } from './components/ScrollToTop';
import { BadgeList } from './components/BadgeList';
import { Welcome } from './components/Welcome';

const App = () => {
  const [inputData, setInputData] = useState([]);
  const [filteredKeyword, setFilteredKeyword] = useState('');
  const [searchItems, setSearchItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const setData = (apps) => {
    setInputData(apps);
    setIsOpen(true);

    if (apps.length === 0) {
      setIsOpen(false);
    }
  }

  const addSearchItem = (item) => {
    setSearchItems([...new Set([...searchItems, item])]);
  }

  const removeSearchItem = (item) => {
    setSearchItems(searchItems.filter(searchItem => searchItem !== item));
  };

  const addSearchCategory = (category) => {
    setSearchItems([...new Set([...searchItems, category])]);
  }

  return (
    <>
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        inputData={inputData}
      />
      <div className="container-wrapper">
        <div className="container">
          <div className={`app ${isOpen ? `narrow` : `wide`}`}>
            <Welcome className="welcome" />
            <div className='content-wrapper'>
              <Search
                setFilteredKeyword={setFilteredKeyword}
                setSearchItems={setSearchItems}
                addSearchItem={addSearchItem}
              />
              <BadgeList addSearchCategory={addSearchCategory} />
              <div className="search-item-list-wrapper">
                <SearchItemList
                  searchItems={searchItems}
                  removeSearchItem={removeSearchItem}
                />
              </div>
              <CardList
                setData={setData}
                searchItems={searchItems}
                filteredKeyword={filteredKeyword}
              />
            </div>
            <ScrollToTop />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
