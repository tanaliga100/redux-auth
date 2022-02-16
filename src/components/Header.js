import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActionCreators } from "../store/auth-slice";

const Header = () => {
  const isLogin = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActionCreators.logout());
  };

  return (
    <header className={classes.header}>
      <span className={classes.title}>
        <h2>Redux Auth</h2>
        <small>using Redux/Toolkit</small>
      </span>
      {isLogin && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
