import React from 'react';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles.jsx';
import { createStructuredSelector } from 'reselect';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils.js';
import { connect } from 'react-redux';
import { selectCurrentUser} from '../../redux/user/user.selectors';
import { selectCartHidden} from '../../redux/cart/cart.selectors';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';



const Header = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/contact'>
        CONTACT
      </OptionLink>
        {
          currentUser ?
          <OptionLink as='div'
            onClick={() =>{auth.signOut()}}>
            SIGN OUT
            </OptionLink>
          :
          <OptionLink to='/login'>SIGN IN</OptionLink>
        }
        <CartIcon />
    </OptionsContainer>
    {
      hidden ? null :
    <CartDropdown />
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });

export default connect(mapStateToProps)(Header);