import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <h1 className="header">{props.headerText}</h1>
    );
}

export default Header;