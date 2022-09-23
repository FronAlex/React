import React from 'react';
import header from './Header.module.css'

const Header = () => {
    return <header className={header.header}>
        <img className={header.img} src='https://klike.net/uploads/posts/2019-03/medium/1551511791_8.jpg' alt='text'></img>
    </header>
};


export default Header