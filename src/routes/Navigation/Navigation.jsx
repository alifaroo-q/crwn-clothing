import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <>
      <nav className="flex m-5 justify-between items-center">
        <Link to="/">
          <CrwnLogo />
        </Link>
        <div>
          <Link className="mx-3" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link onClick={signOutHandler} className="mx-3">
              SIGN OUT
            </Link>
          ) : (
            <Link className="mx-3" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
