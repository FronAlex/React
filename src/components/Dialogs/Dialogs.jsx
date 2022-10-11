import React from 'react';
import dialogs from './Dialogs.module.css';
import Message from './Message/Message';
import DialogsItem from './DialogsItem/DialogsItem';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/state';


const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;

    let dialogsElements = state.dialogsData.map(d => <DialogsItem name={d.name} id={d.id} />);
    let messagesElements = state.messageData.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
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