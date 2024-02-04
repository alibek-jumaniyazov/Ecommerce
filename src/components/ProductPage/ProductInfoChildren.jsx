import React from 'react'
import ProductImages from './ProductImages'
import { Flex, Rate } from 'antd'
import VendorCard from './VendorCard'

export default function ProductInfoChildren() {
    return (
        <div className='ProductInfo'>
            <div className="productImages__div">
                <ProductImages />
            </div>
            <div className="productName__desc">
                <p className="productStock">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8.79508 15.875L4.62508 11.705L3.20508 13.115L8.79508 18.705L20.7951 6.70504L19.3851 5.29504L8.79508 15.875Z" fill="#00B517" />
                    </svg>
                    In stock
                </p>
                <p className="productName">Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</p>
                <div className="productSale__info">
                    <div className="productStars productActions">
                        <Rate style={{ fontSize: "17px", gap: "0px" }} defaultValue={4} allowClear={false} />
                        <p>9.3</p>
                    </div>
                    <div className="dot"></div>
                    <div className="productComents productActions">
                        <i class="fa-solid fa-comment"></i>
                        <p>32 reviews</p>
                    </div>
                    <div className="dot"></div>
                    <div className="productSold productActions">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p>154 sold</p>
                    </div>
                </div>
                <div className="productSale__price">
                    <div className="productPice">
                        <p className='productPrice__text priceRed'>$98.00</p>
                        <span>50-100 pcs</span>
                    </div>
                    <div className="productPice">
                        <p className='productPrice__text'>$90.00</p>
                        <span>100-700 pcs</span>
                    </div>
                    <div className="productPice">
                        <p className='productPrice__text'>$78.00</p>
                        <span>700+ pcs</span>
                    </div>
                </div>
                <div className="productMain__infos">
                    <div className="productMain__info">
                        <span>Price: </span>
                        <p>Negotiable</p>
                    </div>
                    <div className="productMain__info">
                        <span>Type: </span>
                        <p>Classic  shoes</p>
                    </div>
                    <div className="productMain__info">
                        <span>Material: </span>
                        <p>Plastic material</p>
                    </div>
                    <div className="productMain__info">
                        <span>Design: </span>
                        <p>Modern nice</p>
                    </div>
                    <div className="productMain__info">
                        <span>Customization:</span>
                        <p>Customized logo and design custom packages</p>
                    </div>
                    <div className="productMain__info">
                        <span>Protection: </span>
                        <p>Refund Policy</p>
                    </div>
                    <div className="productMain__info">
                        <span>Warranty: </span>
                        <p>2 years full warranty </p>
                    </div>
                </div>
            </div>
            <div className="productNetwork__profil">
                <VendorCard/>
            </div>
        </div>
    )
}
