import React, { useState } from 'react'
import img from '../../assets/icons/realateProduct.png'
import Item from 'antd/es/list/Item'
import RealateProduct from './RealateProduct'

export default function Relate() {

  const [product, setProduct] = useState([
    {
      id: 1,
      img: img,
      tite: "Xiaomi Redmi 8 Original",
      price: "$32.00-$40.00"
    },
    {
      id: 2,
      img: img,
      tite: "Xiaomi Redmi 8 Original",
      price: "$32.00-$40.00"
    },
    {
      id: 3,
      img: img,
      tite: "Xiaomi Redmi 8 Original",
      price: "$32.00-$40.00"
    },
    {
      id: 4,
      img: img,
      tite: "Xiaomi Redmi 8 Original",
      price: "$32.00-$40.00"
    },
    {
      id: 5,
      img: img,
      tite: "Xiaomi Redmi 8 Original",
      price: "$32.00-$40.00"
    },
    {
      id: 6,
      img: img,
      tite: "Xiaomi Redmi 8 Original",
      price: "$32.00-$40.00"
    },
  ])

  return (
    <div className='Relate'>
      <h1 className="realteTitle">Related products</h1>
      <div className="relateProducts">
        {
          product.map((item) => (
            <RealateProduct item={item} />
          ))
        }
      </div>
    </div>
  )
}
