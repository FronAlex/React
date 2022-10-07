import React from 'react';
import dialogs from './Dialogs.module.css';
import Message from './Message/Message';
import DialogsItem from './DialogsItem/DialogsItem';











const Dialogs = (props) => {





    let dialogsElements = props.props.map(d => <DialogsItem name={d.name} id={d.id} />);
    let messagesElements = props.message.map(m => <Message message={m.message} />);

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItems}>

                {dialogsElements}

            </div>

            <div className={dialogs.messages}>

                {messagesElements}

            </div>

        </div >
    )
}

export default Dialogs;