import useCounter from './useCounter'

const Counter = () => {
  const { count, onClickDecrement, onClickIncrement, onClickReset } = useCounter()

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
