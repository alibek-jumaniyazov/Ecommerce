import React, { useContext, useState } from 'react'
import CategoryUser from '../components/Home/main/CategoryUser'
import TimeSection from '../components/Home/main/TimeSection'
import AddSection from '../components/Home/main/AddSection'
import SendRequestSection from '../components/Home/main/SendRequestSection'
import RecommendSection from '../components/Home/main/RecommendSection'
import ExtraService from '../components/Home/main/ExtraService'
import FromIcon from '../components/Home/main/FromIcon'
import { UserContext } from '../Context/UserContext'

export default function Home() {

  const { addProduct, products, service, flag } = useContext(UserContext)

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
            <ExtraService item={item} key={item.id} />
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
