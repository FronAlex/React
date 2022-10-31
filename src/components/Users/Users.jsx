import React from "react";
import userPhoto from '../../images/Basic.jpg'
import style from "./Users.module.css";

let Users = (props) => {

    /* let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize); */

    let pages = [];
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && style.selectedPage}
                    onClick={(e) => { props.onPageChanged(p) }} >{p}</span>
            })}

        </div>

        {

            props.users.map(u =>

                <div key={u.id} >
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='photo' className={style.usersPhoto} ></img>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => { props.unfollow(u.id) }} >UnFollowed</button>
                                : <button onClick={() => { props.follow(u.id) }}>Followed</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>
            )

        }
    </div>
}

export default Users;