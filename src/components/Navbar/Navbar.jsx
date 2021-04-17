import React from "react";
import { NavLink } from "react-router-dom";
import c from  "./Navbar.module.css";
import NavFriend from "./NavFriend/NavFriend";

const Navbar = (props) => {
  
  let friend = props.friends.map(f => <NavFriend name={ f.name} key={f.id} />);

  return (
    <nav className={c.nav}>
      <div className={`${c.item} ${c.active}`}>
        <NavLink to='/profile' activeClassName={c.active}>Profile</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to='/message' activeClassName={c.active}>Message</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to='/news' activeClassName={c.active}>News</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to='/users' activeClassName={c.active}>Users</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to='/music' activeClassName={c.active}>Music</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to='/setting' activeClassName={c.active}>Setting</NavLink>
      </div>
      <div className={`${c.item} ${c.divFriend}`}>
          <h3>Friends</h3>
          { friend }
      </div>
    </nav>
  );
};

export default Navbar;
