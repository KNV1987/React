import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

  return (
    <div className={c.content}>
      < ProfileInfo profile={props.profile} 
      savePhoto={props.savePhoto} 
      isOwner={props.isOwner} 
      saveProfile={props.saveProfile}
      status={props.status} 
      updateStatus={props.updateStatus} />
      < MyPostsContainer />
    </div>
  );
};

export default Profile;
