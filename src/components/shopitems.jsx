/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { ShopContext } from './shopcontext';
import Product from './prod'; // Renamed 'Prod' to 'Product' for clarity and consistency

/**
 * Component to display shop items fetched from an API.
 * @returns {JSX.Element} ShopItems component.
 */
const ShopItems = () => {
  // Destructuring context functions and state
  const { selectedProduct, addToCart, cartItems, removeToCart, updateCartItemCount } = useContext(ShopContext);
  
  // State to hold fetched products
  const [fetchedProducts, setFetchedProducts] = useState([]);

  // Fetch products from API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://productsapi-production-4566.up.railway.app/products/");
        const data = await response.json();
        console.log(data);
        if (Array.isArray(data)) {
          setFetchedProducts(data);
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {/* Map over fetched products and render Product component for each */}
      {[...fetchedProducts].map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
};

export default ShopItems;
