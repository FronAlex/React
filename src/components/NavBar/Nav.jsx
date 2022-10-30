import React from 'react';
import { NavLink } from 'react-router-dom';
import nav from './Nav.module.css';



const setActive = ({ isActive }) => isActive ? nav.activeLink : '';

const NavBar = () => {
    return <nav className={nav.nav}>
        <div className={nav.item}>
            < NavLink to='/Profile' className={setActive}>Profile</NavLink>
        </div>
        <div className={nav.item}>
            < NavLink to='/Dialogs' className={setActive}>Messages</NavLink>
        </div>
        <div className={nav.item}>
            < NavLink to='/Users' className={setActive}>Users</NavLink>
        </div>
        <div className={nav.item}>
            < NavLink to='/News' className={setActive}>News</NavLink>
        </div>
        <div className={nav.item}>
            < NavLink to='/Settings' className={setActive}>Settings</NavLink >
        </div>

    </nav>
};

export default NavBar;