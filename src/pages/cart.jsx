/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { ShopContext } from '../components/shopcontext';
import CartItem from '../components/cartitem';
import { useNavigate } from 'react-router-dom';

/**
 * Component for rendering the cart page.
 * @returns {JSX.Element} Cart component.
 */
const Cart = (props) => {
    // Destructure context values and functions
    const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);
    const [fetchedProducts, setFetchedProducts] = useState([]);

    useEffect(() => {
        // Fetch data from API on component mount
        const fetchData = async () => {
            try {
                const response = await fetch("https://productsapi-production-4566.up.railway.app/products/");
                const data = await response.json();
                console.log(data);
                // Assuming the fetched data is an array of products
                // You may need to adjust this based on the actual structure of your data
                if (Array.isArray(data)) {
                    setFetchedProducts(data);
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchData();
    }, []);

    // Function to handle screen resize
    const handleResize = () => {
        setIsMobile(window.innerWidth < 576);
    };

    // Add event listener for screen resize on component mount
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="cart">
            <div className="container-xxl p-5">
                {totalAmount > 0 ?
                    <div className="row">
                        {/* Cart Items */}
                        <div className='p-2 text-center'>
                            <h2>Cart</h2>
                        </div>
                        <div className="col-12 col-md-5 text-center">
                            <h5>Product</h5>
                        </div>
                        <div className="col-12 col-md-5 text-center">
                            <h5>Details</h5>
                        </div>
                        <div className="p-3">
                            {[...fetchedProducts].map((product) => {
                                if (cartItems[product.id] !== 0) {
                                    return <CartItem key={product.id} data={product} />;
                                }
                            })}
                            {/* Clear Cart Button */}
                            <div className='col-12 p-2 text-end'>
                                <button onClick={() => clearCart()} id='clear-cart'> Clear Cart </button>
                            </div>
                            <hr />
                            {/* Continue Shopping Button */}
                            <div className="row">
                                <div className="col-12 col-md-6 d-flex m-auto justify-content-center mt-4">
                                    <button onClick={() => navigate("/shop")}>
                                        {isMobile ? "Continue" : "Continue Shopping"}
                                    </button>
                                </div>
                                {/* Total and Checkout Button */}
                                <div className="col-12 col-md-6 total m-auto d-flex flex-column p-5">
                                    <div className="col-12">
                                        <div className="text-end">
                                            <h2 className="mb-3">
                                                <b>Total</b>
                                            </h2>
                                            <div className="align-items-center">
                                                <div>
                                                    <p className="total-price align-items-center">
                                                        <b>${totalAmount}</b>
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Proceed to Checkout Button */}
                                            <button
                                                onClick={() => navigate("/checkout")}
                                                className="mt-5"
                                            >
                                                {isMobile ? "Check Out" : "Proceed to Checkout"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    // Empty Cart Message
                    <div className="container-xxl">
                        <div className="row">
                            <div className="text-center p-5 mb-4">
                                <h2>Your Cart Is Empty!!!</h2>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    );
}

export default Cart;
