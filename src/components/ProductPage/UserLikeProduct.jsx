import React from 'react'
import LikeProduct from './LikeProduct'

export default function UserLikeProduct() {
  return (
    <div className='UserLikeProduct'>
        <p className='userLikeProduct__title'>You may like</p>
        <div className="likeProducts">
            <LikeProduct/>
            <LikeProduct/>
            <LikeProduct/>
            <LikeProduct/>
            <LikeProduct/>
        </div>
    </div>
  )
}
