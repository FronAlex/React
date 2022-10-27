import React from 'react';
import dialogs from './Dialogs.module.css';
import Message from './Message/Message';
import DialogsItem from './DialogsItem/DialogsItem';



const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElements = state.dialogsData.map(d => <DialogsItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messageData.map(m => <Message message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItems}>

                {dialogsElements}

            </div>

            <div className={dialogs.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message' ></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>

            </div>

        </div >
    )
}

export default Dialogs;