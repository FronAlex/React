
import React from 'react';
import dialogs from '../Message/Message.module.css';



const Message = (props) => {

    return (
        <div className={dialogs.dialog}>{props.message}</div>

    )
}

export default Message;