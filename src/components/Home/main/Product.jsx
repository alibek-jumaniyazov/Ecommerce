import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product({item}) {

  const params = useParams(null)
  console.log(params);

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
