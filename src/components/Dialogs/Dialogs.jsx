import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../Common/FormsControls/FormsControls";
import { maxLengthCreater, required } from "../utils/validators";
import c from "./Dialogs.module.css";
import DialogsItems from "./DialogsItem/DialogsItems";
import Message from "./Message/Message";


const Dialogs = (props) => {
  let state = props.dialogsPage; 

  let dialog = state.dialogs.map( d => (<DialogsItems name={d.name} key={d.id} id={d.id} />));
  let message = state.messages.map( m => (<Message message={m.message} key={m.id} />));
  let newMessageBody = state.newMessageBody;
  
 
 
  let addNewMessage =(values) => {
    props.sendMessage(values.newMessageBody);
  }

  if(!props.isAuth) return <Redirect to='/login'/>
  return (
    
    <div className={c.dialogs}>
      <div className={c.dialogsItem}>
        { dialog }
      </div>
      <div className={c.messages}>
        <div>{ message }</div>
        <div>
          <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>      
      </div>
    </div>
  );
};

const maxLength100 = maxLengthCreater(100)
const AddMessageForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field  component={Textarea} validate={[required, maxLength100]} placeholder='Add message' name='newMessageBody' />
    </div>
    <div className={c.btnPost}><button > Add Message </button></div>

  </form>
}
const AddMessageFormRedux = reduxForm({
  form: 'dialogAddMessageForm'
})(AddMessageForm);

export default Dialogs;
