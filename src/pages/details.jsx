/* eslint-disable no-unused-vars */
import React from 'react'
import Productdetails from '../components/productdetails'

/**
 * Component for rendering product details page.
 * @returns {JSX.Element} Product details component.
 */
const details = () => {
  return<>
    {/* Product Details Section */}
    <section className="product-details p-5">
      <div className="conntainer-xxl">
        <div className="row">
          {/* Render Productdetails component */}
          <Productdetails />
        </div>
      </div>
    </section>
  </>
}

export default details
