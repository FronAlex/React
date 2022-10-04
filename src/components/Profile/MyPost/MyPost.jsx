import React from 'react';
import Post_1 from '../Post/Post_1';
import myPost from './MyPost.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const MyPost = (props) => {



    let postsElements = props.post.map(p => <Post_1 message={p.message} likesCount={p.likesCount} />)

    return <div className={myPost.content}>
        <ProfileInfo />
        <div >
            <textarea className={myPost.text} name="" id="" cols="30" rows="5"></textarea>
            <button className={myPost.buttom} >Add Post</button>
        </div>

        {postsElements}

        <div></div>

    </div>
};

export default MyPost;