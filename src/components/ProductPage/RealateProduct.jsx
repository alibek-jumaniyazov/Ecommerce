import React from 'react'

export default function RealateProduct({item}) {
  return (
    <div className='RealateProduct'>
            <div className="realateProduct__img">
                <img src={item.img} alt="" />
            </div>
            <p className="realateProduct__title">{item.tite}</p>
            <span className="realateProduct__price">{item.price}</span>
    </div>
  )
}
