import React from 'react'
import { Card } from '../Card'
import db from '../../assets/db.json'

const CardList = () => {
  return (
    <div className="card-list">
      {db.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  )
}

export { CardList }