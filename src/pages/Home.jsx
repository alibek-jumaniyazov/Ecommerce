import React, { useState } from 'react'
import CategoryUser from '../components/Home/CategoryUser'
import TimeSection from '../components/Home/main/TimeSection'
import AddSection from '../components/Home/main/AddSection'
import productBGImg from '../assets/icons/productBGImg.png'
import Item from 'antd/es/list/Item'

export default function Home() {

  const [addProduct, setAddProduct] = useState([{
    bgImg1: {
      id: 1,
      img: productBGImg,
      title: "Home and outdoor"
    },
    productInfo: [
      {
        id: 1,
        name: "Soft chairs",
        from: 'From ',
        price: 100
      },
      {
        id: 2,
        name: "Soft chairs",
        from: 'From ',
        price: 100
      },
      {
        id: 3,
        name: "Soft chairs",
        from: 'From ',
        price: 100
      },
      {
        id: 4,
        name: "Soft chairs",
        from: 'From ',
        price: 100
      },
      {
        id: 5,
        name: "Soft chairs",
        from: 'From ',
        price: 100
      },
      {
        id: 6,
        name: "Soft chairs",
        from: 'From ',
        price: 100
      },
      {
        id: 7,
        name: "Soft chairs",
        from: 'From ',
        price: 100
      },
      {
        id: 8,
        name: "Soft chairs",
        from: 'From ',
        price: 100
      },
    ]
  }])

  return (
    <div className='Home'>
      <CategoryUser />
      <TimeSection />
      {
        addProduct.map((item) => (
          <AddSection item={item} />
        ))
      }
    </div>
  )
}
