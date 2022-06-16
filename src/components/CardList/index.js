import React, { useState } from 'react'
import { Card } from '../Card'
import db from '../../assets/db.json'

const CardList = () => {
  const [sidebarItems, setSidebarItems] = useState([]);

  const isItemAdded = (item) => sidebarItems.some(sidebarItem => sidebarItem.id === item.id);

  const addToSidebar = (item) => {
    if (!isItemAdded(item)) {
      setSidebarItems([...sidebarItems, item]);
    }
  }

  const removeFromSidebar = (item) => {
    if (isItemAdded(item)) {
      setSidebarItems(sidebarItems.filter(i => i.id !== item.id));
    }
  }

  return (
    <div className="card-list">
      {db.map((item, index) => (
        <Card
          key={index}
          data={item}
          isAdded={isItemAdded(item)}
          addToSidebar={() => addToSidebar(item)}
          removeFromSidebar={() => removeFromSidebar(item)}
        />
      ))}
    </div>
  )
}

export { CardList }