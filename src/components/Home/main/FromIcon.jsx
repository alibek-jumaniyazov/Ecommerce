import React from 'react'

export default function FromIcon({ item }) {
  return (
    <div className='FromIcon'>
      <img src={item.img} alt="" />
      <div className="FromIcon__texts">
        <p>{item.name}</p>
        <span>{item.title}</span>
      </div>
    </div>
  )
}