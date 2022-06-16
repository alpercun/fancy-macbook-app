import React from 'react'

const ActionButton = ({ addToSidebar, isAdded, removeFromSidebar }) => {

  return (
    <div
      onClick={isAdded ? removeFromSidebar : addToSidebar}
      className={`action-button ${isAdded ? 'minus' : 'plus'}`}
    >
      <span></span>
      <span></span>
    </div>
  )
}

export { ActionButton }