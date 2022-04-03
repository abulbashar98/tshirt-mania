import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to tshirt-mania</h1>
            <nav>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/orderreview'>Order review</CustomLink>
                <CustomLink to='/grandpa'>GrandPa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;