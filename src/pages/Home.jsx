import React from 'react'
import Main from '../components/Home/Main'
import CategoryUser from '../components/Home/CategoryUser'

export default function Home() {
  return (
    <div className='Home'>
      <CategoryUser/>
      <Main />
    </div>
  )
}
