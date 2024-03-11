/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from 'react';

// context
export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
  const cart = {};

  for (const product of products) {
    cart[product.id] = 0;
  }
  
  return cart;
};

const shopcontext = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://productsapi-production-4566.up.railway.app/products/");
        const data = await response.json();
        console.log(data);
        setProducts(data); // Set fetched data to state
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  // Initialize cartItems state with default cart
  useEffect(() => {
    if (!loading) {
      setCartItems(getDefaultCart(products));
    }
  }, [loading, products]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount.toFixed(2);
  };

  const getTotalCartProducts = () => {
    let totalProducts = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalProducts += cartItems[item];
      }
    }
    return totalProducts;
  };

  const addToCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] + 1
    }));
  };

  const removeToCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] - 1
    }));
  };

  const updateCartItemCount = (newAmount, productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: newAmount
    }));
  };

  const clearCart = () => {
    const updatedCartItems = {};
    for (const productId in cartItems) {
      updatedCartItems[productId] = 0;
    }
    setCartItems(updatedCartItems);
  };

  const resetCart = () => {
    setCartItems([]);
  };

  const viewProductDetails = (productId) => {
    setSelectedProduct(productId);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeToCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartProducts,
    clearCart,
    resetCart,
    viewProductDetails,
    closeProductDetails,
    selectedProduct,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default shopcontext;
