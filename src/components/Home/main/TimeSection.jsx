import React, { useState } from 'react'
import time from '../../../assets/icons/timeProduct.png'
import laptop from '../../../assets/icons/laptopProduct.png'
import camera from '../../../assets/icons/cameraProduct.png'
import headphone from '../../../assets/icons/headphoneProduct.png'
import phone from '../../../assets/icons/phoneProduct.png'


export default function TimeSection() {

    const [TimeSectionProduct, setTimeSectionProduct] = useState([
        {
            id: 1,
            img: time,
            name: "Smart watches",
            sale: 25
        },
        {
            id: 2,
            img: laptop,
            name: "Laptops",
            sale: 15
        },
        {
            id: 3,
            img: camera,
            name: "GoPro cameras",
            sale: 40
        },
        {
            id: 4,
            img: headphone,
            name: "Headphones",
            sale: 25
        },
        {
            id: 5,
            img: phone,
            name: "Canon camreras",
            sale: 25
        },

    ])


    return (
        <div className='TimeSection'>
            <div className="timeSale">
                <p className='timeSale__title'>Deals and offers</p>
                <span className='timeSale__desc'>Hygiene equipments</span>
                <div className="timeSale__actions">
                    <div className="timeSale__action">
                        <p>04</p>
                        <span>Days</span>
                    </div>
                    <div className="timeSale__action">
                        <p>13</p>
                        <span>Hour</span>
                    </div>
                    <div className="timeSale__action">
                        <p>34</p>
                        <span>Min</span>
                    </div>
                    <div className="timeSale__action">
                        <p>56</p>
                        <span>Sec</span>
                    </div>
                </div>
            </div>
            <div className="TimeSection__products">
                {
                    TimeSectionProduct.map((item) => (
                        <div className="TimeSection__product" key={item.id}>
                            <img src={item.img} alt="" />
                            <p>{item.name}</p>
                            <span>-{item.sale}%</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
