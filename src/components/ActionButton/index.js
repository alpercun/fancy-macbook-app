import React from 'react'

const ActionButton = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const handleClick = () => {
    isClicked ? setIsClicked(false) : setIsClicked(true);
  }

  return (
    <div>
      <input type="checkbox" id="first" />
      <label
        for="first"
        class="plusminus"
        onClick={handleClick}
        style={{
          backgroundColor: isClicked ? '#ff6b6b' : '#1dd1a1'
        }}
      >
        <span></span>
        <span></span>
      </label>
    </div>
  )
}

export { ActionButton }