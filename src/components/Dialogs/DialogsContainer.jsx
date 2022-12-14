import React from 'react';
/* import StoreContext from '../../StoreContext'; */
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/messages-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


/* const DialogsContainer = () => {


    return <StoreContext.Consumer>

        {(store) => {

            let state = store.getState().messagesPage;

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            };

            let onNewMessageChange = (body) => {

                store.dispatch(updateNewMessageBodyCreator(body));
            }

            return <Dialogs updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                messagesPage={state} />
        }
        }
    </StoreContext.Consumer>

} */

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;