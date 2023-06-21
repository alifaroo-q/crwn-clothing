import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../contexts/usersContext";
import { CartContext } from "../../contexts/cartContext";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import CartIcon from "../../components/CartIcon";
import CartDropDown from "../../components/CartDropDown";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <>
      <nav className="flex mb-6 justify-between items-center">
        <Link to="/">
          <CrwnLogo />
        </Link>
        <div className="flex items-center gap-8">
          <Link to="/shop">SHOP</Link>
          {currentUser ? (
            <span onClick={signOutUser} className="cursor-pointer">
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth">SIGN IN</Link>
          )}

          <CartIcon />
        </div>
      </nav>
      {isCartOpen && <CartDropDown />}
      <Outlet />
    </>
  );
};

export default Navigation;
