import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

const MoreProduct = (props) => {
    // State for fetched products
    const [fetchedProducts, setFetchedProducts] = useState([]);
    
    // Fetching data when component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://productsapi-production-4566.up.railway.app/products/");
                const data = await response.json();
                console.log(data);
                setFetchedProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // JSX for more featured products section
    return (
        <>
            <section className="more-featured-products">
                <div className="container-xxl">
                    <div className="row">
                        <div className=" text-center p-5">
                            <h1>More products</h1>
                            <p>You might also like these</p>
                        </div>
                        <div className="d-flex justify-content-between p-5 row">
                            {/* Mapping over fetched products data to display more products */}
                            {fetchedProducts.slice(3, 7).map((product) => (
                                <div className="col-3 mb-3" key={product.id}>
                                    {/* Product card */}
                                    <Link to='/view2' className="card align-items-center">
                                        <img src={product.image} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body me-auto">
                                            <p className="card-text mb-2">{product.brand}</p>
                                            <h5>{product.name} </h5>
                                            {/* Star rating component */}
                                            <ReactStars
                                                count={5}
                                                edit={false}
                                                value={4} // Default value for now
                                                size={24}
                                                activeColor="#EA9D5A"
                                            />
                                            {/* Product price */}
                                            <p className="price"><span className="red">{product.price} </span>&nbsp; <strike>200$</strike></p>
                                        </div>
                                        {/* Action bar */}
                                        <div className="action-bar position-absolute">
                                            <div className="d-flex align-items-center">
                                                {/* View button */}
                                                <Link to='/view2' id='button-linker' className='mb-3'>View</Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MoreProduct;
