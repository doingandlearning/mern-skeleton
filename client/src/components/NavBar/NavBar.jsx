import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import userService from '../../utils/userService';
import './NavBar.css';

const NavBar = () => {
  const [state, setState] = React.useContext(UserContext)
  const handleLogout = () => {
    userService.logout()
    setState({ ...state, user: null })
  }


  let nav = state.user ?
    <div>
      <NavLink to='/protected' className='NavBar-link'>Protected Route</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <NavLink to='' className='NavBar-link' onClick={handleLogout}>LOG OUT</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {state.user.name}</span>
    </div>
    :
    <div>
      <NavLink to='/login' className='NavBar-link'>LOG IN</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <NavLink to='/signup' className='NavBar-link'>SIGN UP</NavLink>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;