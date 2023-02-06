import React, { useState, useEffect, useRef } from 'react'

import { ActionButton } from '../ActionButton';
import { BadgeList } from '../BadgeList';

const Card = ({ data, isAdded, addToInput, removeFromInput }) => {
  const { logo, name, description, categories } = data;

  const listRef = useRef(null);
  const listRefCard = useRef(null);

  useEffect(() => {
    if (300 >listRef.current.offsetWidth) {
      listRef.current.querySelector('.icon').style.display = 'none';
      // listRef.current.querySelector('.icon').style.display = 'initial';
    }
  }, [listRef]);

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
      ref={listRefCard}
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
        <div className='badge-list-wrapper' ref={listRef}>
          <BadgeList
            badgeTypes={categories}
            addSearchCategory={() => { }}
          />
        </div>
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