import React from "react";
import { NavLink } from "react-router-dom";
import c from "../Dialogs.module.css";




const Message = (props) =>{
  return <div className={c.message}>{props.message}</div>
};

export default Message;
