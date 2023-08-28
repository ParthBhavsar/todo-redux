import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../../store/actions/CounterActions";

const useCounter = () => {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const onClickIncrement = () => {
    dispatch(incrementCounter(1, count));
  };
  
  const onClickDecrement = () => {
    dispatch(decrementCounter(1));
  };

  const onClickReset = () => {
    dispatch(resetCounter());
  };
  
  return {
    count,
    onClickDecrement,
    onClickIncrement,
    onClickReset
  }
}

export default useCounter
