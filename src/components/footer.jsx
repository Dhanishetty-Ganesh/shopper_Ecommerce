/* eslint-disable no-unused-vars */
import React from 'react';
import { BsDiscord } from 'react-icons/bs'; // Importing Discord icon
import { Link } from 'react-router-dom'; // Importing Link component for routing
import { BsTwitter } from 'react-icons/bs'; // Importing Twitter icon
import { BsFacebook } from 'react-icons/bs'; // Importing Facebook icon
import { BsSlack, BsGithub } from 'react-icons/bs'; // Importing Slack and Github icons
import playstore from '../assets/images/pay/play.jpg'; // Importing Play Store image
import appstore from '../assets/images/pay/app.jpg'; // Importing App Store image
import visa from '../assets/images/pay/pay.png'; // Importing Visa image

// Footer component
const Footer = () => {
    return (
        <>
            <footer className='footer p-5'>
                <div className="container-xxl">
                    {/* Row for contact, about, account, and install app sections */}
                    <div className="row justify-content-center justify-content-md-start">
                        {/* Contact Section */}
                        <div className="col-md-4 col-lg-4 mb-4 mb-md-0">
                            <h2 className='footer-title mb-3'><b>Contact</b></h2>
                            <div className='mb-3'><p><b>Address:</b> Thika town, Naltex building, 2nd floor</p> </div>
                            <div className='mb-3'><p><b>Phone:</b> <a className='footer-tel' href="tel:+1234567890">Call us at +1 (234) 567-890</a></p> </div>
                            <div className='mb-4'><p><b>Hours:</b> From 8 a.m To 6 p.m</p> </div>
                            <div className='mb-3'><p><b>Follow the developer</b></p> </div>
                            {/* Social media icons */}
                            <div className="socials d-flex gap-3">
                                <Link to='https://discord.com/' id='footer-link' target='_blank' className='gap-3'>
                                    <BsDiscord />
                                </Link>
                                <Link to='https://twitter.com/' id='footer-link' target='_blank' className='gap-3'>
                                    <BsTwitter />
                                </Link>
                                <Link to={'https://github.com/'} className='gap-3' id='footer-link'>
                                    <BsGithub />
                                </Link>
                            </div>
                        </div>
                        {/* About Section */}
                        <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
                            <h2 className='footer-title mb-3'><b>About</b></h2>
                            <div className='mb-3'> <Link to='/about' id='footer-links'>About Us</Link> </div>
                            <div className='mb-3'> <Link to='checkout' id='footer-links'>Delivery</Link> </div>
                            <div className='mb-3'> <Link id='footer-links'>Privacy Policy</Link> </div>
                            <div className='mb-3'> <Link id='footer-links'>Terms & Conditions</Link> </div>
                            <div className='mb-3'> <Link id='footer-links'>Fee Policy</Link> </div>
                        </div>
                        {/* Account Section */}
                        <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
                            <h2 className='footer-title mb-3'><b>Account</b></h2>
                            <div className='mb-3'> <Link to='/login' id='footer-links'>Profile</Link> </div>
                            <div className='mb-3'> <Link to='/cart' id='footer-links'>View Cart</Link> </div>
                            <div className='mb-3'> <Link to='/contact' id='footer-links'>Help</Link> </div>
                            <div className='mb-3'> <Link id='footer-links'>Payments</Link> </div>
                            <div className='mb-3'> <Link id='footer-links'>My Wishlist</Link> </div>
                            <div className='mb-3'> <Link id='footer-links'>Coupons</Link> </div>
                        </div>
                        {/* Install App Section */}
                        <div className="col-md-4 col-lg-4">
                            <h2 className='footer-title mb-3'><b>Install App</b></h2>
                            <p className='mb-3'>Available On Google Play Services & App Store</p>
                            <div className="className='mb-3 col-md-6 col-12 pay">
                                <div className='mb-3'>
                                    <Link to='https://play.google.com/' target='_blank'>
                                        <img src={playstore} alt="" />
                                    </Link>
                                </div>
                                <div className='mb-3'>
                                    <Link to='https://www.apple.com/app-store/' target='_blank'>
                                        <img src={appstore} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <p className="mb-3">Payment Methods</p>
                            <div className="pay">
                                <Link to='https://www.paypal.com/signin' target='_blank'>
                                    <img src={visa} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Horizontal line */}
                    <hr className='my-4' />
                    {/* Footer bottom section */}
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p className="text-center text-md-start">&copy;Developed by Ganesh @2024</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <ul className="list-inline text-center text-md-end">
                                <li className="list-inline-item"><Link to="#" className="text-dark">Privacy Policy</Link></li>
                                <li className="list-inline-item"><Link to="#" className="text-dark">Terms of Use</Link></li>
                                <li className="list-inline-item"><Link to="#" className="text-dark">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
