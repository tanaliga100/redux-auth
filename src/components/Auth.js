import classes from './Auth.module.css';
import {useSelector, useDispatch} from "react-redux"
import {authActionCreators} from "../store/auth-slice"

const Auth = () => {

  const dispatch = useDispatch()

  const loginHandler = (e) => {
    e.preventDefault()
    dispatch(authActionCreators.login()) 
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
