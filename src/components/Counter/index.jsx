import { useEffect } from 'react';
import useCounter from './useCounter'

const Counter = () => {
  const { count, onClickDecrement, onClickIncrement, onClickReset } = useCounter()

  useEffect(() => {
    console.log('count was updated')
  }, [count])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClickIncrement}> Increment </button>
      <button onClick={onClickDecrement}> Decrement </button>
      <button onClick={onClickReset}> RESET </button>
    </div>
  );
};

export default Counter;
