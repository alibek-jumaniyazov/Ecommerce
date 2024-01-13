import { Button } from 'antd'
import React from 'react'

export default function Subscribe() {
    return (
        <div className='Subscribe'>
            <p>Subscribe on our newsletter</p>
            <span className='Subscribe__desc'>Get daily news on upcoming offers from many suppliers all over the world</span>
            <div className="SubscribeInputBtn">
                <div className="Subscribe__input">
                    <i class="fa-regular fa-envelope"></i>
                    <input type="text" placeholder='Email' />
                </div>
                <Button className='sentRequestPost__btn' type="primary">Subscribe</Button>
            </div>
        </div>
    )
}
