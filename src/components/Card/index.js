import React from 'react'
import { ActionButton } from '../ActionButton';

const Card = ({ data }) => {
  const { logo, name, description } = data;

  const [isHover, setIsHover] = React.useState(false);
  const showHover = () => {
    isHover ? setIsHover(false) : setIsHover(true);
  }

  return (
    <div
      className="card"
      onMouseEnter={showHover}
      onMouseLeave={showHover}
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
        isHover && (
          <ActionButton className="action-button" />)
      }
    </div>
  )
}

export { Card }