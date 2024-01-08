import React from 'react'
import JoinedUser from './main/JoinedUser'

export default function CategoryUser() {
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
                <p>Latest trending</p>
                <span>Electronic items</span>
                <button>Learn more</button>
            </div>
            <div className="categoryUserHaator">
                <JoinedUser/>
            </div>
        </div>
    )
}
