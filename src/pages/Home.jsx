import React, { useState } from 'react'
import CategoryUser from '../components/Home/main/CategoryUser'
import TimeSection from '../components/Home/main/TimeSection'
import AddSection from '../components/Home/main/AddSection'
import SendRequestSection from '../components/Home/main/SendRequestSection'
import productBGImg from '../assets/icons/productBGImg.png'
import productBGImg2 from '../assets/icons/productBGImg2.png'
import addImg1 from '../assets/icons/addImg1.png'
import productImg1 from '../assets/icons/productImg1.png'
import RecommendSection from '../components/Home/main/RecommendSection'

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


  const [products, setProducts] = useState([
    {
      id: 1,
      img: productImg1,
      price: 10.30,
      desc: 'T-shirts with multiple colors, for men'
    },
    {
      id: 2,
      img: productImg1,
      price: 10.30,
      desc: 'Jeans shorts for men blue color'
    },
    {
      id: 3,
      img: productImg1,
      price: 10.30,
      desc: 'Brown winter coat medium size'
    },
    {
      id: 4,
      img: productImg1,
      price: 10.30,
      desc: 'Jeans bag for travel for men'
    },
    {
      id: 5,
      img: productImg1,
      price: 10.30,
      desc: 'Leather wallet'
    },
    {
      id: 6,
      img: productImg1,
      price: 10.30,
      desc: 'Canon camera black, 100x zoom'
    },
    {
      id: 7,
      img: productImg1,
      price: 10.30,
      desc: 'Headset for gaming with mic'
    },
    {
      id: 8,
      img: productImg1,
      price: 10.30,
      desc: 'Smart watch silver color modern'
    },
    {
      id: 9,
      img: productImg1,
      price: 10.30,
      desc: 'Blue wallet for men leather metarfial'
    },
    {
      id: 10,
      img: productImg1,
      price: 10.30,
      desc: 'Jeans bag for travel for men'
    },
  ])

  return (
    <div className='Home' >
      <CategoryUser />
      <TimeSection />
      <div className="AddSections">
        <AddSection addProduct={addProduct.sectionOne} />
        <AddSection addProduct={addProduct.sectionTow} />
      </div >
      <SendRequestSection />
      <h1 className='RecommendedItems__title'>Recommended items</h1>
      
      <RecommendSection products={products}/>
    </div>
  )
}
