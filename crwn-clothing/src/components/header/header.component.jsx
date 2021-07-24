import React, {Component} from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils.js';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';



const Header = ({currentUser, hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
        {
          currentUser ?
          <Link
            className='option'
            to='/' 
            onClick={() =>{auth.signOut()}}>
            SIGN OUT
            </Link>
          :
          <Link className='option' to='/login'>SIGN IN</Link>
        }
        <CartIcon />
    </div>
    {
      hidden ? null :
    <CartDropdown />
    }
  </div>
);

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => {
  return({
    currentUser,
    hidden
  });
}

export default connect(mapStateToProps)(Header);