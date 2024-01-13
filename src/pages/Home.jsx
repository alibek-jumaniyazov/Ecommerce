import React, { useState } from 'react'
import CategoryUser from '../components/Home/main/CategoryUser'
import TimeSection from '../components/Home/main/TimeSection'
import AddSection from '../components/Home/main/AddSection'
import SendRequestSection from '../components/Home/main/SendRequestSection'
import productBGImg from '../assets/icons/productBGImg.png'
import productBGImg2 from '../assets/icons/productBGImg2.png'
import addImg1 from '../assets/icons/addImg1.png'
import productImg1 from '../assets/icons/productImg1.png'
import serviceImg1 from '../assets/icons/serviceImg1.png'
import serviceImg2 from '../assets/icons/serviceImg2.png'
import serviceImg3 from '../assets/icons/serviceImg3.png'
import serviceImg4 from '../assets/icons/serviceImg4.png'
import fromIcon1 from '../assets/icons/fromIcon1.svg'
import fromIcon2 from '../assets/icons/fromIcon2.svg'
import fromIcon3 from '../assets/icons/fromIcon3.svg'
import fromIcon4 from '../assets/icons/fromIcon4.svg'
import fromIcon5 from '../assets/icons/fromIcon5.svg'
import fromIcon6 from '../assets/icons/fromIcon6.svg'
import fromIcon7 from '../assets/icons/fromIcon7.svg'
import fromIcon8 from '../assets/icons/fromIcon8.svg'
import fromIcon9 from '../assets/icons/fromIcon9.svg'


import RecommendSection from '../components/Home/main/RecommendSection'
import ExtraService from '../components/Home/main/ExtraService'
import FromIcon from '../components/Home/main/FromIcon'
import Subscribe from '../components/Home/main/Subscribe'

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

  const [service, setService] = useState([
    {
      id: 1,
      img: serviceImg1,
      title: "Source from Industry Hubs",
      icon: "fa-solid fa-magnifying-glass",
    },

    {
      id: 2,
      img: serviceImg2,
      title: "Customize Your Products",
      icon: " fa-solid fa-box-archive",
    },

    {
      id: 3,
      img: serviceImg3,
      title: "Fast, reliable shipping by ocean or air",
      icon: "fa-solid fa-paper-plane",
    },
    {
      id: 4,
      img: serviceImg4,
      title: "Product monitoring and inspection",
      icon: "fa-solid fa-shield-halved",
    },

  ])

  const [flag, setFlag] = useState([
    {
      id: 1,
      img: fromIcon1,
      name: "Australia",
      title: "shopname.ae"
    },
    {
      id: 2,
      img: fromIcon2,
      name: "United States",
      title: "shopname.ae"
    },
    {
      id: 3,
      img: fromIcon3,
      name: "Russia",
      title: "shopname.ru"
    },
    {
      id: 4,
      img: fromIcon4,
      name: "Italy",
      title: "shopname.it"
    },
    {
      id: 5,
      img: fromIcon5,
      name: "France",
      title: "shopname.com.fr"
    },
    {
      id: 6,
      img: fromIcon6,
      name: "Arabic Emirates",
      title: "shopname.ae"
    },
    {
      id: 7,
      img: fromIcon7,
      name: "China",
      title: "shopname.ae"
    },
    {
      id: 8,
      img: fromIcon1,
      name: "Great Britain",
      title: "shopname.co.uk"
    },
    {
      id: 9,
      img: fromIcon8,
      name: "Arabic Emirates",
      title: "shopname.ae"
    },
    {
      id: 10,
      img: fromIcon9,
      name: "Denmark",
      title: "denmark.com.dk"
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
      <RecommendSection products={products} />
      <h1 className='RecommendedItems__title'>Our extra services</h1>
      <div className="ExtraServices">
        {
          service.map((item) => (
            <ExtraService item={item} />
          ))
        }
      </div>
      <h1 className='RecommendedItems__title'>Suppliers by region</h1>
      <div className="FromIcons">
        {
          flag.map((item) => (
            <FromIcon item={item} />
          ))
        }
      </div>
    </div>
  )
}
