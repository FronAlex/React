import React from 'react';
/* import StoreContext from '../../../StoreContext'; */
import { addPostsActionCreator, updateNewPostTextActionCreator } from '../../redux/profile-reducer';
import MyPost from '../MyPost/MyPost';
import { connect } from 'react-redux';

/* const MyPostContainer = () => {



    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostsActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);

                }

                return <MyPost updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.postData}
                    newPostText={state.profilePage.newPostText} />

            }
            }
        </StoreContext.Consumer>


    )
};
 */


let mapStateToProps = (state) => {

    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);

        },
        addPost: () => {
            dispatch(addPostsActionCreator());
        },
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;