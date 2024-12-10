import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const MianRoot = () => {
    return (
        <div>
             <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MianRoot;