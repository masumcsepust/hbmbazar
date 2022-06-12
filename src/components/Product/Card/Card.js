import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-lg-4'>
                    <h2 style={{textAlign:'center'}}>Product Card</h2>
                    <div className="card">
                    <img src={"../assets/images/products/product1.jpg"} alt="Denim Jeans" style={{width:"100%"}} />
                    <h1>Tailored Jeans</h1>
                    <p className="price">$19.99</p>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                    <p><button>Add to Cart</button></p>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <h2 style={{textAlign:'center'}}>Product Card</h2>
                    <div className="card">
                    <img src={"../assets/images/products/product1.jpg"} alt="Denim Jeans" style={{width:"100%"}} />
                    <h1>Tailored Jeans</h1>
                    <p className="price">$19.99</p>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                    <p><button>Add to Cart</button></p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Card;