import React from 'react'

const AppName = ({ data, removeFromInput }) => {
  const { name } = data;
  return (
    <div className="app-name">
      <span className="app-name-text">
        {name}
      </span>
      <div
        onClick={removeFromInput}
        className='app-name-remove'
      >
        x
      </div>
    </div>
  )
}

export { AppName }
