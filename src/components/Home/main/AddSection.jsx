import Item from 'antd/es/list/Item'
import React from 'react'

export default function AddSection({ addProduct }) {
    return (
        <div className='AddSection'>
            {
                addProduct.bgImg1.map((item , index) => (
                    <div className="addSection__info" key={index}>
                        <img src={item.img} alt="" />
                        <div className="addSecInfo__texts">
                            <p>{item.title}</p>
                            <button className='defoultStyleBtn'>Source now</button>
                        </div>
                    </div>
                ))
            }
            <div className="addSection__products">
                {
                    addProduct.products.map((item,index) => (
                        <div className="addSection__product" key={index}>
                            <div className="addSecProduct__texts">
                                <p>{item.name}</p>
                                <span>{item.from}</span>
                                <span>USD {item.price}</span>
                            </div>
                            <div className="addSecProduct__img">
                                <img src={item.img} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
