import React from 'react';
import { addPostsActionCreator, updateNewPostTextActionCreator } from '../../redux/state';

import Post_1 from '../Post/Post_1';
import myPost from './MyPost.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';




const MyPost = (props) => {

    let newPostElement = React.createRef();

    let addPosts = () => {
        props.dispatch(addPostsActionCreator());
    }

    let postsElements = props.post.postData.map(p => <Post_1 message={p.message} likesCount={p.likesCount} />)


    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return <div className={myPost.content}>
        <ProfileInfo />
        <div >
            <textarea onChange={onPostChange} className={myPost.text} ref={newPostElement} value={props.post.newPostText} cols="30" rows="5" />
            <button className={myPost.buttom} onClick={addPosts} >Add Post</button>
        </div>

        {postsElements}

        <div></div>

    </div>
};

export default MyPost;