import React from 'react'

export default function Product({item}) {

  return (
    <div className='Product'>
        <img src={item.img} alt="" />
        <div className="products__info">
            <p>${item.price}</p>
            <span>{item.desc}</span>
        </div>
    </div>
  )
}
