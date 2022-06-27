import React from 'react'

const ActionButton = ({ addToInput, isAdded, removeFromInput }) => {

  return (
    <div
      onClick={isAdded ? removeFromInput : addToInput}
      className={`action-button ${isAdded ? 'minus' : 'plus'}`}
    >
      <span></span>
      <span></span>
    </div>
  )
}

export { ActionButton }