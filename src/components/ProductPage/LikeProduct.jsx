import React from 'react'
import img from '../../assets/icons/miniLikeProduct.png'


export default function LikeProduct() {
  return (
    <div className='LikeProduct'>
        <div className="LikePrduct__img">
            <img src={img} alt="" />
        </div>
        <div className="likeProduct__infos">
            <p>Men Blazers Sets Elegant Formal</p>
            <span>$7.00 - $99.50</span>
        </div>
    </div>
  )
}
