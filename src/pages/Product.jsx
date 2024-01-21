import React from 'react'
import ProductInfo from '../components/ProductPage/ProductInfo'

export default function CategoryProduct() {
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
      <ProductInfo/>
    </div>
  )
}
