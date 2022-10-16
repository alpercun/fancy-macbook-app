import React from 'react'

const Badge = ({ category, addSearchCategory }) => {
  const handleClickCategory = () => {
    addSearchCategory(category)
  }

  return (
    <div onClick={handleClickCategory} className="badge">
      {category}
    </div>
  )
}

export { Badge }