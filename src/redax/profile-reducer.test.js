import React from "react";
import profileReducer, { createAddPost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, post: "Hello", like: "30" },
    { id: 2, post: "Hi", like: "20" },
  ],
};

test("new post should by added", () => {
  //1. test data
  let action = createAddPost("IT.com");
  //2. action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.post.length).toBy(3);
});

test("after deleting length of message should by decrement", () => {
  //1. test data
  let action = deletePost(1);
  //2. action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.post.length).toBy(1);
});
