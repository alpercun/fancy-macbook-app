import React, { useState } from 'react'
import { ActionButton } from '../ActionButton';

const Card = ({ data, isAdded, addToSidebar, removeFromSidebar }) => {
  const { logo, name, description } = data;

  const [showActionButton, setShowActionButton] = useState(false);

  const showButton = () => setShowActionButton(true);
  const hideButton = () => !isAdded && setShowActionButton(false);

  return (
    <div
      className="card"
      onMouseEnter={showButton}
      onMouseLeave={hideButton}
    >
      <div className="header">
        <div className="logo">
          <img
            src={logo}
            alt={name}
          />
        </div>
        <div className="name">
          {name}
        </div>
      </div>
      <div className="body">
        {description}
      </div>
      {
        showActionButton && (
          <ActionButton
            addToSidebar={addToSidebar}
            removeFromSidebar={removeFromSidebar}
            isAdded={isAdded}
          />)
      }
    </div>
  )
}

export { Card }