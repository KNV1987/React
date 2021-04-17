import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../Common/FormsControls/FormsControls";
import { maxLengthCreater, required } from "../../utils/validators";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = React.memo(props => {

  let post = props.posts.map(p => <Post mesage={p.post} key={p.id} like={p.like} />);

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }


  return (
    <div className={c.myPosts}>
      <h3>My post</h3>
      <div>
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </div>
      { post}
    </div>
  );
});

const maxLength15 = maxLengthCreater(15);

const AddNewPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={Textarea}
        name='newPostText'
        placeholder='Add post'
        validate={[required, maxLength15]} />
    </div>
    <div className={c.btnPost}>
      <button >Add Post</button>
    </div>
  </form>
}

const AddNewPostFormRedux = reduxForm({
  form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

export default MyPosts;
