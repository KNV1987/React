import React from "react";
import { connect } from "react-redux";
import { createAddPost, createUpdateNewPost } from "../../../redax/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let myDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(createAddPost(newPostText));
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, myDispatchToProps)(MyPosts);
export default MyPostsContainer;
