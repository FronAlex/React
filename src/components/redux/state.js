import { rerenderEntireTree } from "../../index";




let state = {
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
    },
    sidebar: {

    },

}

export let addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();

}


export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
};



export default state;