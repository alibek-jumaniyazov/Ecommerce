import React from 'react'

export default function ProductDesctComment() {
    return (
        <div className='ProductDesctComment'>
            <div className="productDesc__header">
                <p className='productDesc__headerText DescActive'>Description</p>
                <p className='productDesc__headerText'>Reviews</p>
                <p className='productDesc__headerText'>Shipping</p>
                <p className='productDesc__headerText'>About seller</p>
                <div className="descHeader__textBorder"></div>
            </div>
            <div className="productFullDescription">
                <p className='fullText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="productModel">
                    <div className="productModel__titles">
                        <span>Model</span>
                        <span>Style</span>
                        <span>Certificate</span>
                        <span>Size</span>
                        <span>Memory</span>
                    </div>
                    <div className="productModel__infos">
                        <span>#8786867</span>
                        <span>Classic style</span>
                        <span>ISO-898921212</span>
                        <span>34mm x 450mm x 19mm</span>
                        <span>36GB RAM</span>
                    </div>
                </div>
                <div className="productSacces">
                    <p><i class="fa-solid fa-check"></i> Some great feature name here</p>
                    <p><i class="fa-solid fa-check"></i> Lorem ipsum dolor sit amet, consectetur </p>
                    <p><i class="fa-solid fa-check"></i> Duis aute irure dolor in reprehenderit</p>
                    <p><i class="fa-solid fa-check"></i> Some great feature name here</p>
                </div>
            </div>
        </div>
    )
}
