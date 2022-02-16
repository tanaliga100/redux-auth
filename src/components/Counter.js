import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActionCreators }from '../store/counter-slice'

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incHandler = () => {
    dispatch(counterActionCreators.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActionCreators.increase(10));
  };
  const decHandler = () => {
    dispatch(counterActionCreators.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActionCreators.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incHandler}>INC</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decHandler}>DEC</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
