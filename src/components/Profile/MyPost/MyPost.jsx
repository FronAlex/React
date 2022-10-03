import React from 'react';
import Post_1 from '../Post/Post_1';
import myPost from './MyPost.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const MyPost = () => {

    let postData = [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It, my first post?', likesCount: 50 },


    ]



    return <div className={myPost.content}>
        <ProfileInfo />
        <div >
            <textarea className={myPost.text} name="" id="" cols="30" rows="5"></textarea>
            <button className={myPost.buttom} >Add Post</button>
        </div>

        <Post_1 message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post_1 message={postData[1].message} likesCount={postData[1].likesCount} />

        <div></div>

    </div>
};

export default MyPost;