import React from 'react'

export default function SaleNew({item}) {
  return (
    <div className='SaleNew' style={{backgroundColor: item.bgColor}}>
        <p>{item.description}</p>
    </div>
  )
}
