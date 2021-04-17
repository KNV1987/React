import React from "react";
import { NavLink } from "react-router-dom";
import c from  "../Navbar.module.css";

const NavFriend = (props) => {
  return (
            <div className={ c.imgFriend }>
              <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"/>
              <div>{ props.name }</div>
            </div>
  );
};

export default NavFriend;
