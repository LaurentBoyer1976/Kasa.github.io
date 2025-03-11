import React from 'react';
import { Outlet } from 'react-router';
import Header from "../../Js/Components/Header";
import Footer from "../../Js/Components/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <main className="mainContainer">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;