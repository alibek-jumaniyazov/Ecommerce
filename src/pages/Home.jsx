import React, { useState } from 'react'
import CategoryUser from '../components/Home/CategoryUser'
import TimeSection from '../components/Home/main/TimeSection'
import AddSection from '../components/Home/main/AddSection'
import productBGImg from '../assets/icons/productBGImg.png'
import Item from 'antd/es/list/Item'

export default function Home() {

  const [addProduct, setAddProduct] = useState([
    bgImg1:{
      id: 1,
      img: productBGImg,
      title: "Home and outdoor"
},
    {

    }
  ])

  return (
    <div className='Home'>
      <CategoryUser />
      <TimeSection />
      {
        addProduct.map((item) => (
          <AddSection item={item}/>
        ))
      }
    </div>
  )
}
