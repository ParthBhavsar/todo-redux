export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const RESET_COUNTER = "RESET_COUNTER";

export const incrementCounter = (step, currentCount) => {
  return {
    type: INCREMENT_COUNTER,
    payload: { count: currentCount + step }
  };
};

export const decrementCounter = (step) => {
  return {
    type: DECREMENT_COUNTER,
    payload: { step }
  };
};

export const resetCounter = () => {
  return {
    type: RESET_COUNTER,
    count: 0
  };
};
