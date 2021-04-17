const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogeReducer;
