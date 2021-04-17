import React from "react";
import c from "./Post.module.css";

const Post = (props) => {
  return (

      <div className={c.item}>
        <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"/>
        <div className={c.itemDiv}>
          <div>{props.mesage}</div>
          <div>like {props.like}</div>
        </div> 
      </div>
  );
};

export default Post;
