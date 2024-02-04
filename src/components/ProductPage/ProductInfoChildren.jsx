import React from 'react'
import ProductImages from './ProductImages'

export default function ProductInfoChildren() {
    return (
        <div className='ProductInfo'>
            <div className="productImages__div">
                <ProductImages />
            </div>
            <div className="produductName__desc">
                <p className="productStock">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8.79508 15.875L4.62508 11.705L3.20508 13.115L8.79508 18.705L20.7951 6.70504L19.3851 5.29504L8.79508 15.875Z" fill="#00B517" />
                    </svg>
                    In stock
                </p>
                <p className="productName">Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</p>
                <div className="productSale__info">
                    <div className="productStars"></div>
                    <div className="productComents"></div>
                    <div className="productSold"></div>
                </div>

            </div>
            <div className="productNetwork__profil">

            </div>
        </div>
    )
}
