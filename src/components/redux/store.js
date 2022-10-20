import messageReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hi, how are you?', likesCount: 120 },
                { id: 2, message: 'It, my first post?', likesCount: 50 },

            ],
            newPostText: 'Aleksander React'

        },
        messagesPage: {

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
        },
        sidebar: {

        },

    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {


        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);


    },


};




export default store;