import React from 'react';
import Post_1 from '../Post/Post_1';
import './MyPost.css';

const MyPost = () => {
    return <div className='content'>
        <div>
            <img src="https://klike.net/uploads/posts/2019-06/1561526578_1.jpg" className="img_1"></img>
        </div>

        <div className="my">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJWM0IQV2k6GAcBlLgEdiEhiOLVKWtdrAgyhQPMlVFdC18apn_yfoa6peRpHqLhJ-fKw&usqp=CAU" className="my_img"></img>
            <div className="my_h1">
                <h1>Alexander REACKT</h1>
            </div>
        </div>
        <Post_1 />
        <Post_1 />
        <Post_1 />


    </div>
};

export default MyPost;