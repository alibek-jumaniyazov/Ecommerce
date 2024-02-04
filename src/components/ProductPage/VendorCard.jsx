import React from 'react'
import icon1 from '../../assets/icons/icon.svg'
import icon2 from '../../assets/icons/verified_user.svg'
import icon3 from '../../assets/icons/language.svg'
import avatar from '../../assets/icons/Rectangle 246.svg'
import { Button } from 'antd'

export default function VendorCard() {
    return (
        <div className='VendorCard'>
            <div className="vendorName__img">
                <div className="vendorImg">
                    <img src={avatar} alt="" />
                </div>
                <div className="vendorShop__name">
                    <p>Supplier</p>
                    <p>Guanjoi Trading LLC</p>
                </div>
            </div>
            <div className="vendorInfos">
                <div className="vendorInfo">
                    <img src={icon1} alt="" className='VinfoIcon' />
                    <p>Germany, Berlin</p>
                </div>
                <div className="vendorInfo">
                    <img src={icon2} alt="" className='VinfoIcon' />
                    <p>Verified Seller</p>
                </div>
                <div className="vendorInfo">
                    <img src={icon3} alt="" className='VinfoIcon' />
                    <p>Worldwide shipping</p>
                </div>
            </div>
            <div className="vendorShopOpen__btns">
                <Button type="primary" className='shopBtns'>Send inquiry</Button>
                <Button className='shopBtns'>Seller’s profile</Button>
            </div>
            <div className="vanderProduct__save">
                <i class="fa-regular fa-heart"></i>
                <p>Save for later</p>
            </div>
        </div>
    )
}
