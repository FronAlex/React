
import React from 'react';
import info from './ProfileInfo.module.css';



const ProfileInfo = (props) => {

    return (<div>
        <div>
            <img src="https://klike.net/uploads/posts/2019-06/1561526578_1.jpg" className={info.img_1}></img>
        </div>

        <div className={info.my}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJWM0IQV2k6GAcBlLgEdiEhiOLVKWtdrAgyhQPMlVFdC18apn_yfoa6peRpHqLhJ-fKw&usqp=CAU" className={info.my_img}></img>
            <div className={info.my_h1}>
                <h1>Alexander REACT</h1>
            </div>
        </div>
    </div>
    )
}

export default ProfileInfo;