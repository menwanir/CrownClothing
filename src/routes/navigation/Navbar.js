import { Outlet, Link } from "react-router-dom";
import { Fragment , useContext } from "react";

import '../../styles/navigation.styles.scss'
import { ReactComponent as RohanLogo } from '../../assets/rohan3.svg';
import { UserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/CartIcon";
import CartDropdown from "../../components/CartDropdown";
import { CartContext } from "../../contexts/cart-context";

const Navigation = () => {
  const {currentUser } =  useContext(UserContext)
  // console.log(currentUser)
const {isCartOpen} = useContext(CartContext)


 

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <RohanLogo className='logo' />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              {' '}
              SIGN OUT{' '}
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
