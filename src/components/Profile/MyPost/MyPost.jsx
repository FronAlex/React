import React from 'react';
import Post_1 from '../Post/Post_1';
import myPost from './MyPost.module.css';

const MyPost = () => {

    return <div className={myPost.content}>
        <div>
            <img src="https://klike.net/uploads/posts/2019-06/1561526578_1.jpg" className={myPost.img_1}></img>
        </div>

        <div className={myPost.my}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJWM0IQV2k6GAcBlLgEdiEhiOLVKWtdrAgyhQPMlVFdC18apn_yfoa6peRpHqLhJ-fKw&usqp=CAU" className={myPost.my_img}></img>
            <div className={myPost.my_h1}>
                <h1>Alexander REACT</h1>
            </div>
        </div>
        <input type="text"></input>
        <Post_1 message='Hi, how are you?' num='5' />
        <Post_1 message='It, my first post?' num='50' />



    </div>
};

export default MyPost;