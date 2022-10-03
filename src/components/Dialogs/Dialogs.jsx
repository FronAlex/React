import React from 'react';
import dialogs from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';



const DialogsItem = (props) => {

    let path = '/Dialogs/' + props.id;

    return (
        <div className={dialogs.dialog + ' ' + dialogs.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {

    return (
        <div className={dialogs.dialog}>{props.message}</div>

    )
}




const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
    ]

    let messageData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'AndrHow is your it-Reactey' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },

    ]

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItems}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />

            </div>

            <div className={dialogs.messages}>

                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />


            </div>

        </div >
    )
}

export default Dialogs;