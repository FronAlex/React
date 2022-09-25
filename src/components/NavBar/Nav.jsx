import React from 'react';
import { Link } from 'react-router-dom';
import nav from './Nav.module.css';

const NavBar = () => {
    return <nav className={nav.nav}>
        <div className={nav.item}>
            < Link to='/Profile'>Profile</Link>
        </div>
        <div className={nav.item}>
            < Link to='/Dialogs'>Messages</Link>
        </div>
        <div className={nav.item}>
            < Link to='/News'>News</Link>
        </div>
        <div className={nav.item}>
            < Link to='/Settings'>Settings</Link >
        </div>

    </nav>
};

export default NavBar;