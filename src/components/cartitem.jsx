/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { ShopContext } from './shopcontext'; // Importing ShopContext
import { RiDeleteBack2Line } from 'react-icons/ri'; // Importing delete icon

// Functional component for each item in the cart
const CartItem = (props) => {
    // Destructuring props
    const { id, name, price, image, brand } = props.data;

    // Destructuring context values
    const { addToCart, cartItems, removeToCart, updateCartItemCount, itemPrice } = useContext(ShopContext);

    // Calculating items in stock based on id
    const itemsInStock = id === 0 ? Math.ceil((id + 2.5) * 102 / 2) : Math.ceil((id * 102.5) / 2);

    // JSX for cart item component
    return (
        <>
            <div className="container card my-3">
                <div className="row g-3">
                    <div className="col-12 col-md-5">
                        <div className="p-3">
                            <div className="cart-item-image m-auto">
                                <img src={image} className="card-img-top img-fluid" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="p-3">
                            <h2>{name}</h2>
                            <p className="cart-item-id">Product Brand: <b className='text-center mb-1'>{brand}</b></p>
                            <p className="cart-item-id">Product Price: <b className='text-center mb-1'>${price}</b></p>
                            <p className="cart-item-id">Product Number: <b className='text-center mb-3'>{id}</b></p>
                            <p className="cart-item-id">Items in Stock: <b className='text-danger'>{itemsInStock}</b></p>
                        </div>
                        <div className="p-3 d-flex justify-content-between align-items-center">
                            <div className="count-handler">
                                {/* Button to increment item count */}
                                <button className="btn btn-outline-secondary" onClick={() => addToCart(id)}>+</button>
                                {/* Input field to display and edit item count */}
                                <input className='text-danger fs-4 form-control' value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                                {/* Button to decrement item count */}
                                <button className="btn btn-outline-secondary" onClick={() => removeToCart(id)}>-</button>
                            </div>
                            {/* Button to remove item from cart */}
                            <button className="btn btn-outline-danger" onClick={() => removeToCart(id)}>
                                <RiDeleteBack2Line />
                            </button>
                        </div>
                        {/* Input field for coupon code */}
                        <div className="p-3">
                            <input type="text" className="form-control" id="coupon" placeholder="Enter coupon code..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItem;
