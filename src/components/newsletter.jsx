/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Newsletter component for signing up for email updates.
 * @returns {JSX.Element} Newsletter component.
 */
const Newsletter = () => {
  return (
    <>
      {/* Newsletter Section */}
      <section className="news-letter p-5">
        <div className="container-xxl">
          <div className="row g-3">
            {/* Left Column: Title */}
            <div className="col-md-6">
              <div className="d-flex flex-column align-items-center">
                <h2 className='mb-3'>Sign Up for a newsletter</h2>
                <h5>Get email updates on all our <Link>special offers</Link></h5>
              </div>
            </div>
            {/* Right Column: Input Form */}
            <div className="col-md-6 details d-flex flex-column justify-content-center">
              <div className="input-group mb-3">
                {/* Email Input */}
                <input type="text" id='news-input' className="form-control" placeholder="@example.com" aria-label="@example.com" aria-describedby="basic-addon2" />
                {/* Submit Button */}
                <button className="input-group-text" id="basic-addon2">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
