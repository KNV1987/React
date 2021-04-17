import dialogeReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "Hello", like: "30" },
        { id: 2, post: "Hi", like: "20" },
      ],
      newPostText: "Hello",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Nick" },
        { id: 2, name: "Tatsia" },
        { id: 3, name: "Dasha" },
        { id: 4, name: "Masha" },
      ],
      messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Hi" },
        { id: 3, message: "Perfecto" },
        { id: 4, message: "Good" },
      ],
      newMessageBody: "",
    },
    sidebarPage: {
      friends: [
        { id: 1, name: "Nick" },
        { id: 2, name: "Tatsia" },
        { id: 3, name: "Dasha" },
      ],
    },
  },
  _callSubscriber() {
    console.log("123");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogeReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
