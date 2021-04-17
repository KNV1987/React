import React from "react";
import { NavLink } from "react-router-dom";
import c from "../Dialogs.module.css";

const DialogsItems = (props) => {
 
  let path = '/message/' + props.id;
  return(
    <div className={c.dialog + " " + c.active}>
      <NavLink to={path} activeClassName={c.active}>{props.name}</NavLink> 
    </div>
  )
}

export default DialogsItems;
