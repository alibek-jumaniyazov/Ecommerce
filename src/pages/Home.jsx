import React, { useState } from 'react'
import CategoryUser from '../components/Home/main/CategoryUser'
import TimeSection from '../components/Home/main/TimeSection'
import AddSection from '../components/Home/main/AddSection'
import SendRequestSection from '../components/Home/main/SendRequestSection'
import productBGImg from '../assets/icons/productBGImg.png'
import productBGImg2 from '../assets/icons/productBGImg2.png'
import addImg1 from '../assets/icons/addImg1.png'

export default function Home() {


  const [addProduct, setAddProduct] = useState({
    sectionOne: {
      bgImg1: [{
        id: 1,
        img: productBGImg,
        title: "Home and outdoor"
      }],
      products: [
        {
          id: 1,
          name: "Soft chairs",
          from: 'From ',
          price: 100,
          img: addImg1
        },
        {
          id: 2,
          name: "Soft chairs",
          from: 'From ',
          price: 100,
          img: addImg1
        },
        {
          id: 3,
          name: "Soft chairs",
          from: 'From ',
          price: 100,
          img: addImg1
        },
        {
          id: 4,
          name: "Soft chairs",
          from: 'From ',
          price: 100,
          img: addImg1
        },
        {
          id: 5,
          name: "Soft chairs",
          from: 'From ',
          price: 100,
          img: addImg1
        },
        {
          id: 6,
          name: "Soft chairs",
          from: 'From ',
          price: 100,
          img: addImg1
        },
        {
          id: 7,
          name: "Soft chairs",
          from: 'From ',
          price: 100,
          img: addImg1
        },
        {
          id: 8,
          name: "Soft chairs",
          from: 'From ',
          price: 100,
          img: addImg1
        },
      ]

    },
    sectionTow: {
      bgImg1: [{
        id: 1,
        img: productBGImg2,
        title: "Consumer electronics and gadgets"
      }],
      products: [
        {
          id: 1,
          name: "Soft chairs",
          from: 'From ',
          price: 100,
          img: addImg1
        },
        {
          id: 2,
          name: "Soft chairs",
          from: 'From ',
          price: 100,
          img: addImg1
        },
        {
          id: 3,
          name: "Soft chairs",
          from: 'From ',
          price: 100,
          img: addImg1
        },
        {
          id: 4,
          name: "Soft chairs",
          from: 'From ',
          price: 100,
          img: addImg1
        },
        {
          id: 5,
          name: "Soft chairs",
          from: 'From ',
          price: 100,
          img: addImg1
        },
        {
          id: 6,
          name: "Soft chairs",
          from: 'From ',
          price: 100,
          img: addImg1
        },
        {
          id: 7,
          name: "Soft chairs",
          from: 'From ',
          price: 100,
          img: addImg1
        },
        {
          id: 8,
          name: "Soft chairs",
          from: 'From ',
          price: 100,
          img: addImg1
        },
      ]

    },
  })

  return (
    <div className='Home' >
      <CategoryUser />
      <TimeSection />
      <div className="AddSections">
        <AddSection addProduct={addProduct.sectionOne} />
        <AddSection addProduct={addProduct.sectionTow} />
      </div >
      <SendRequestSection />
    </div>
  )
}
