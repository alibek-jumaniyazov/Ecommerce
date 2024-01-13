import React from 'react'

export default function ExtraService({ item }) {
    return (
        <div className='ExtraService'>
            <div className="serviceImgBg">
                <img src={item.img} alt="" />
            </div>
            <div className="ExtraService__info">
                <p>{item.title}</p>
            </div>
            <div className="ExtraService__icon">
                <i className={item.icon}></i>
            </div>
        </div>
    )
}
