import React, { useEffect, useState } from 'react'
import { Card } from '../Card'
import db from '../../assets/db.json'

const CardList = ({ setData, setFilteredKeyword }) => {
  const [inputItems, setInputItems] = useState([]);

  useEffect(() => {
    setData(inputItems);
  });

  const filteredData = db.filter(item => {
    return item.name.toLowerCase().includes(setFilteredKeyword.toLowerCase())
      || item.categories.includes(setFilteredKeyword);
  })

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