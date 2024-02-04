import React from 'react'
import ProductDesctComment from './ProductDesctComment'
import UserLikeProduct from './UserLikeProduct'

export default function ProductDesc() {
  return (
    <div className='ProductDesc'>
        <ProductDesctComment/>
        <UserLikeProduct/>
    </div>
  )
}
