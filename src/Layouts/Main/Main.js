import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Common/Footer/Footer';
import Header from '../../Pages/Common/Header/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;