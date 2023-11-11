import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUSer } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  // This hook will rerun the functions before the return even if I dont use the value.
  const { currentUser, setCurrentUSer } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUSer();
    setCurrentUSer(null);
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <CrwnLogo className="logo" />
          </div>
        </Link>
        <div className="links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
