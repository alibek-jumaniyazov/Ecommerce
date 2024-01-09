import React, { useState } from 'react'
import JoinedUser from './main/JoinedUser'
import SaleNew from './main/SaleNew'
import bgImg from '../../assets/icons/Banner.png'

export default function CategoryUser() {

    const [saleNew, setSaleNew] = useState([
        {
            id: 1,
            description: "Get US $10 off with a new supplier",
            bgColor: '#F38332'
        },
        {
            id: 2,
            description: "Send quotes with supplier preferences",
            bgColor: '#55BDC3'
        },

    ])


    return (
        <div className='CategoryUser'>
            <div className="categoryText">
                <p>Automobiles</p>
                <p>Clothes and wear</p>
                <p>Home interiors</p>
                <p>Computer and tech</p>
                <p>Tools, equipments</p>
                <p>Sports and outdoor</p>
                <p>Animal and pets</p>
                <p>Machinery tools</p>
                <p>More category</p>
            </div>
            <div className="bannerSale">
                <img src={bgImg} alt="" />
                <div className="bannerSaleText">
                    <p>Latest trending</p>
                    <span>Electronic items</span>
                    <button>Learn more</button>
                </div>
            </div>
            <div className="categoryUserHaator">
                <JoinedUser />
                <div className="categorySaleNew">
                    {
                        saleNew.map((item) => (
                            <SaleNew item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
