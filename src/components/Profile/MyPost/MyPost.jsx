import React from 'react';

import Post_1 from '../Post/Post_1';
import myPost from './MyPost.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';




const MyPost = (props) => {

    let newPostElement = React.createRef();

    let onAddPosts = () => {
        props.addPost();

    }


    let postsElements = props.posts.map(p => <Post_1 message={p.message} likesCount={p.likesCount} />)


    let onAddPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }

    return <div className={myPost.content}>
        <ProfileInfo />
        <div >
            <textarea onChange={onAddPostChange} className={myPost.text} ref={newPostElement} value={props.posts.newPostText} cols="30" rows="5" />
            <button className={myPost.buttom} onClick={onAddPosts} >Add Post</button>
        </div>

        {postsElements}

        <div></div>

    </div>
};

export default MyPost;