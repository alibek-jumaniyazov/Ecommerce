import React from 'react'
import ProductInfoChildren from '../components/ProductPage/ProductInfoChildren'

export default function ProductInfo() {
  return (
    <div className='CategoryProduct'>
      <p className="categoryProduct__hosting">
        Home
        <i className="fa-solid fa-angle-right"></i>
        Clothings
        <i className="fa-solid fa-angle-right"></i>
        Men’s wear
        <i className="fa-solid fa-angle-right"></i>
        Summer clothing
      </p>
      <ProductInfoChildren />
    </div>
  )
}
