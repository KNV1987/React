import React from "react";
import styles from './Users.module.css';
import usersPhoto from '../../assets/imeges/user.png'
import { NavLink } from "react-router-dom";


let User = ({user, folowingInProgress, unfollow, follow}) => {
  
    return (      
      <div key={user.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small !== null ? user.photos.small : usersPhoto} className={styles.usersPhoto}/>
            </NavLink>
          </div>
          <div>
            { user.followed ? 
            <button disabled={folowingInProgress.some(id => id === user.id)} onClick={ () => { 
              unfollow(user.id)}} >Unfollow</button> : 
              
            <button  disabled={folowingInProgress.some(id => id === user.id)} onClick={ () => { 
              follow( user.id)}}> Follow</button>}
            
          </div>
        </span>
        
        <span>
          <span>
            <div> {user.name}</div>
            <div> {user.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div> {"u.location.city"}</div>
          </span>
        </span>

      </div>)
};

export default User;
