/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { ShopContext } from './shopcontext';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

/**
 * Product component representing individual product information.
 * @param {object} props - Props containing data for the product.
 * @returns {JSX.Element} Product component.
 */
const Product = (props) => {
    // Destructuring props
    const { id, name, price, image, brand } = props.data;
    
    // Using useContext hook to access shared state and functions
    const { addToCart, cartItems, viewProductDetails } = useContext(ShopContext);

    // Retrieving the amount of this product in the cart
    const cartItemAmount = cartItems[id];
    
    return (
        <>
            <div className="col mb-5">
                {/* Link to product details page */}
                <Link key={id} className="card h-100 m-auto">
                    <img src={image} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <p className="card-text mb-2">{brand}</p>
                        <h5>{name} </h5>
                        {/* Rating stars */}
                        <ReactStars
                            count={5}
                            edit={false}
                            value={4} // This should be dynamic based on product ratings
                            size={24}
                            activeColor="#EA9D5A"
                        />
                        <div className="mb-3">
                            {/* Product prices */}
                            <p className="price mb-2"><span className="red">{price} </span>&nbsp;  <strike>{price * 2}$</strike></p>
                            {/* Link to product details page */}
                            <Link to='/details' onClick={() => viewProductDetails(id)}>
                                <p className="text-center"><button className='fs-4' id='clear-cart'>View Details</button></p>
                            </Link>
                        </div>
                        <div className="d-flex justify-content-center">
                            {/* Add to cart button */}
                            <button 
                                onClick={() => {
                                    addToCart(id);
                                    event.target.classList.toggle("red");
                                }}
                                className="myButton"
                            >
                                Add To Cart
                                {/* Show the amount of this product in the cart if it's greater than 0 */}
                                {cartItemAmount > 0 && `(${cartItemAmount})`}
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Product;
