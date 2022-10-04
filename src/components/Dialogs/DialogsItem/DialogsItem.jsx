import React from 'react';
import dialogs from '../DialogsItem/DialogsItem.module.css';
import { NavLink } from 'react-router-dom';




const DialogsItem = (props) => {

    let path = '/Dialogs/' + props.id;

    return (
        <div className={dialogs.dialog + ' ' + dialogs.active}>
            <NavLink className={dialogs.link} to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogsItem;