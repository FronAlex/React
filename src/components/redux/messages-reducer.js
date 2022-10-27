
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {

    dialogsData: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
        { id: 7, name: 'Denis' },
    ],

    messageData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'AndrHow is your it-Reactey' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo Itsh' },
        { id: 5, message: 'Yes' },
    ],
    newMessageBody: ''
}

/* const messageReducer = (state = initialState, action) => {


    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;


    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messageData.push({ id: 6, message: body });

    }

    return state;
}; */

const messageReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };


        case SEND_MESSAGE:

            let body = state.newMessageBody;
            return {
                ...state,

                messageData: [...state.messageData, { id: 6, message: body }],
                newMessageBody: '',
            };

        default:
            return state;
    }
};


export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default messageReducer;