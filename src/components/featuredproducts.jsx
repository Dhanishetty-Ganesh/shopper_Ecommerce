/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://productsapi-production-4566.up.railway.app/products/");
        const data = await response.json();
        console.log(data);
        // Assuming the fetched data is an array of products
        // You may need to adjust this based on the actual structure of your data
        if (Array.isArray(data)) {
          setProducts(data);
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 p-3">
        {products.slice(2, 6).map((product) => (
          <div className="col mb-5" key={product.id}>
            <div className="card h-100 m-auto">
              <img src={product.image} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <p className="card-text mb-2">{product.brand}</p>
                <h5 className='mb-3'>{product.name}</h5>
                <div className="card-footer m-auto text-center">
                  <p className='text-danger fs-4'>{product.status}</p>
                  <p className="price"><span className="red"></span> <strike>${product.rate}</strike></p>
                </div>
                <div className="card-footer d-md-none">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to='shop' className='m-auto'>View products</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeaturedProducts;
