import React, { useEffect, useState } from 'react'
import db from '../../assets/db.json'
import { AddApp } from '../AddApp'
import { Card } from '../Card'

const CardList = ({ filteredKeyword, searchItems, addToInput, removeFromInput, isItemAdded }) => {
  const [filteredData, setFilteredData] = useState(db);

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
        [...new Set(searchItems.map(searchItem => {
          return db.filter(item => {
            const { name, categories } = item;

            return doesItInclude(name, searchItem) || doesItInclude(categories, searchItem)
          });
        }).flat())])
    }
  }, [searchItems])

  useEffect(() => {
    if (filteredKeyword.length === 0 && searchItems.length === 0) {
      setFilteredData(db);
    }
  }, [filteredKeyword, searchItems])

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

      {filteredData.length === 0 && (
        <div className="empty-state">
          <span>
            The application you were looking for was not found.<br /> Can you add this app?
          </span>
          <AddApp />
        </div>
      )}
    </div>
  )
}

export { CardList }