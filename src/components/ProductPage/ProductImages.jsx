import React from 'react'
import img from '../../assets/icons/productImg.png'
export default function ProductImages() {
  return (
    <div className='ProductImage'>
      <div className="productBIgImg__div">
        <img src={img} alt="" className='productBig__Img' />
      </div>
      <div className="productImg__mini">
        <div className="productMiniImg__div">
          <img src={img} alt="" className='productMini__Img' />
        </div>
        <div className="productMiniImg__div">
          <img src={img} alt="" className='productMini__Img' />
        </div>
        <div className="productMiniImg__div">
          <img src={img} alt="" className='productMini__Img' />
        </div>
        <div className="productMiniImg__div">
          <img src={img} alt="" className='productMini__Img' />
        </div>
        <div className="productMiniImg__div">
          <img src={img} alt="" className='productMini__Img' />
        </div>
        <div className="productMiniImg__div">
          <img src={img} alt="" className='productMini__Img' />
        </div>
      </div>
    </div>
  )
}
