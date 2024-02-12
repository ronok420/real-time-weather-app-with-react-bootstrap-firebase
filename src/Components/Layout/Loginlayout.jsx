import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Loginlayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Loginlayout;