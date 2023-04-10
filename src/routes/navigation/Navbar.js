import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import '../../styles/navigation.styles.scss'
import { ReactComponent as RohanLogo } from '../../assets/rohan3.svg';

const Navigation = () => {
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
          <Link className="nav-link" to="/auth">
            Sign IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
