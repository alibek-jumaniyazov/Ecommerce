import React from 'react'
import Product from './Product'

export default function RecommendSection({products}) {
  return (
    <div className='RecommendSection'>
      {
        products.map((item) => (
          <Product item={item}/>
        ))
      }
    </div>
  )
}
