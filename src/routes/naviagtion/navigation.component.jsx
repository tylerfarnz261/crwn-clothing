import React, { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { UserContext } from '../../contexts/users.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import {NavigationContainer, NavLinks, NavLink, LogoContainer} from './navigation.styles.jsx';

function Navigation() {
  
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
 
    return (
      <Fragment>
        <NavigationContainer > 
        <LogoContainer to='/'>  
            <CrwnLogo className='logo'/>
        </LogoContainer> 
          <NavLinks>
            <NavLink to='/shop'>SHOP</NavLink>
            {
              currentUser ? (
                <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
              ):<NavLink to='/auth'>SIGN IN</NavLink>
            }
            <CartIcon />
          </NavLinks>
          {isCartOpen && <CartDropdown />} 
        </NavigationContainer>
        <Outlet />
      </Fragment>
    );
  }

  export default Navigation