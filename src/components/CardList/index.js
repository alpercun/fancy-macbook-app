import React, { useEffect, useState } from 'react'
import { Card } from '../Card'
import db from '../../assets/db.json'

const CardList = ({ setData, filteredKeyword, searchItems }) => {
  const [inputItems, setInputItems] = useState([]);
  const [filteredData, setFilteredData] = useState(db);

  useEffect(() => {
    setData(inputItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputItems]);

  const doesItInclude = (item, searchItem) => {
    if (typeof item === 'string') {
      return item.toLowerCase().includes(searchItem.toLowerCase());
    }

    return item.some(category => category.toLowerCase().includes(searchItem.toLowerCase()))
  }

  useEffect(() => {
    if (filteredKeyword.length > 0) {
      const data = db.filter(
        item => {
          const { name, categories } = item;

          return doesItInclude(name, filteredKeyword) || doesItInclude(categories, filteredKeyword)
        });

      setFilteredData(data);
    }
  }, [filteredKeyword])

  useEffect(() => {
    if (searchItems.length > 0) {
      setFilteredData(
        searchItems.map(searchItem => {
          return db.filter(item => {
            const { name, categories } = item;

            return doesItInclude(name, searchItem) || doesItInclude(categories, searchItem)
          });
        }).flat()
      )
    }
  }, [searchItems])

  useEffect(() => {
    if (filteredKeyword.length === 0 && searchItems.length === 0) {
      setFilteredData(db);
    }
  }, [filteredKeyword, searchItems])


  const isItemAdded = (item) => inputItems.some(inputItem => inputItem.id === item.id);

  const addToInput = (item) => {
    if (!isItemAdded(item)) {
      setInputItems([...inputItems, item]);
    }
  }

  const removeFromInput = (item) => {
    if (isItemAdded(item)) {
      setInputItems(inputItems.filter(i => i.id !== item.id));
    }
  }

  return (
    <div className="card-list">
      {filteredData.map((item, index) => (
        <Card
          key={index}
          data={item}
          isAdded={isItemAdded(item)}
          addToInput={() => addToInput(item)}
          removeFromInput={() => removeFromInput(item)}
        />
      ))}
    </div>
  )
}

export { CardList }