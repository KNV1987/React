import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={c.header}>
      <img src="https://s2.logaster.com/static/v3/img/products/logo.png"></img>

      <div className={c.loginBlock}>
        { props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button> </div>
        :<NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
