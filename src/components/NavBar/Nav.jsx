import React from 'react';
import nav from './Nav.module.css';

const NavBar = () => {
    return <nav className={nav.nav}>
        <div className={nav.item}>
            < a>Profile</a>
        </div>
        <div className={nav.item}>
            < a>Messages</a>
        </div>
        <div className={nav.item}>
            < a>News</a>
        </div>
        <div className={nav.item}>
            < a>Settings</a>
        </div>

    </nav>
};

export default NavBar;