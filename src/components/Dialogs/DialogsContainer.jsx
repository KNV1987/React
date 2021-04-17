import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessageCreator} from "../../redax/dialog-reducer";
import Dialogs from "./Dialogs";



let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let myDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch( sendMessageCreator(newMessageBody));
    }
  }
}




export default compose(
  connect(mapStateToProps, myDispatchToProps),
  withAuthRedirect
)(Dialogs)