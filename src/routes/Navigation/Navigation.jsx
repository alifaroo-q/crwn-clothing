import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation = () => {
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
          <Link className="mx-3" to="/signIn">
            SIGN IN
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
