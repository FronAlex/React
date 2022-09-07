import React from 'react';
import './Profile.css';

const Profile = () => {
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

        <div>My pfoto

        </div>

        <div>coment</div>
        <div className="item">post</div>
        <div className="item">post_1</div>
    </div>
};

export default Profile;