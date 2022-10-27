
import { combineReducers, legacy_createStore } from 'redux';
import messageReducer from './messages-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';



let reducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

let store = legacy_createStore(reducer);



export default store;