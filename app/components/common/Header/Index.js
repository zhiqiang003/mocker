import React from 'react';

const Header = (props) => {
    return (
        <header>{props.system && props.system.name}</header>
    );
}

export default Header;
