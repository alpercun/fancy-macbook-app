import React, { useState, useEffect } from 'react'

import { ActionButton } from '../ActionButton';
import { Badge } from '../Badge';

const Card = ({ data, isAdded, addToInput, removeFromInput }) => {
  const { logo, name, description, categories } = data;

  const [showActionButton, setShowActionButton] = useState(false);

  const showButton = () => setShowActionButton(true);
  const hideButton = () => !isAdded && setShowActionButton(false);

  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (isMobile) {
      setShowActionButton(true);
    }
  }, [isMobile]);


  return (
    <div
      className="card"
      onMouseEnter={showButton}
      onMouseLeave={hideButton}
      onClick={isAdded ? removeFromInput : addToInput}
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
      <div className="categories">
        {
          categories.map(
            (category, index) =>
              <Badge category={category} key={index} addSearchCategory={() => { }} />
          )
        }
      </div>
      {
        showActionButton && (
          <ActionButton
            addToInput={addToInput}
            removeFromInput={removeFromInput}
            isAdded={isAdded}
          />)
      }
    </div>
  )
}

export { Card }