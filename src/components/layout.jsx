// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header'; // Importing Header component
import Footer from './footer'; // Importing Footer component

// Layout component
const Layout = () => {
    // JSX for layout containing header, outlet, and footer
    return (
        <>
            {/* Header */}
            <Header />
            {/* Outlet to render nested routes */}
            <Outlet />
            {/* Footer */}
            <Footer />
        </>
    );
};

export default Layout;
