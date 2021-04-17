import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";



let mapStateToProps = (state) => {
 
  return {
    friends: state.sidebarPage.friends
  }
}

let myDispatchToProps = (dispatch) => {
  return {
    
  }
}

const NavbarContainer = connect(mapStateToProps, myDispatchToProps)(Navbar);
export default NavbarContainer;
