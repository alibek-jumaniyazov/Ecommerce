import { Button, Input, Select } from 'antd'
import React from 'react'
import logo from '../../assets/icons/logo-colored.svg'

export default function Header() {

    const handleChange = (value) => {
        console.log(value);
    };

    return (
        <div className='Header'>
            <header>
                <div className="headerLogo">
                    <img src={logo} alt="" />
                </div>
                <div className="headerSearch">
                    <Input placeholder="Search" className='headerSerachInput' />
                    <Select
                        className='headerSelect'
                        defaultValue="lucy"
                        onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            // { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                    <Button className='headerSerachBtn' type="primary">Search</Button>
                </div>
                <div className="headerActions">
                    <div className="action">
                        <i class="fa-solid fa-user"></i>
                        <p>Profile</p>
                    </div>
                    <div className="action">
                        <i class="fa-solid fa-message"></i>
                        <p>Message</p>
                    </div>
                    <div className="action">
                        <i class="fa-solid fa-heart"></i>
                        <p>Orders</p>
                    </div>
                    <div className="action">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p>My cart</p>
                    </div>
                </div>
            </header>
            <hr />
            <div className="headerCategory">
                <div className="categoryList">
                    <p className="listItems">
                        <i class="fa-solid fa-bars"></i>
                        All category
                    </p>
                    <p className="listItems">Hot offers</p>
                    <p className="listItems">Gift boxes</p>
                    <p className="listItems">Projects</p>
                    <p className="listItems">Menu item</p>
                    <select name="" id="" >
                        <option value="help">Help</option>
                        <option value="fuck">fuck</option>
                    </select>
                </div>
                <div className="changeLanguages">
                    <select name="" id="" >
                        <option value="help">Ship to</option>
                        <option value="fuck">fuck</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
