const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 120 },
        { id: 2, message: 'It, my first post?', likesCount: 50 },

    ],

}



const profileReducer = (state = initialState, action) => {



    switch (action.type) {


        case ADD_POST: {

            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };


            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: '',

            };

        }
        case UPDATE_NEW_POST_TEXT: {


            return {
                ...state,
                newPostText: action.text,

            }

        }
        default:
            return state;


    }


};

export const addPostsActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });

export default profileReducer;