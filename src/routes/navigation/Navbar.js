import { Outlet, Link } from "react-router-dom";
import { Fragment , useContext } from "react";

import '../../styles/navigation.styles.js'
import { ReactComponent as RohanLogo } from '../../assets/rohan3.svg';
import { UserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/CartIcon";
import CartDropdown from "../../components/CartDropdown";
import { CartContext } from "../../contexts/cart-context";



import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from '../../styles/navigation.styles.js'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <RohanLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;