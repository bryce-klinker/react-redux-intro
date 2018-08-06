export const CounterActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

const increment = () => ({ type: CounterActionTypes.INCREMENT });
const decrement = () => ({ type: CounterActionTypes.DECREMENT });

export const CounterActions = {
  increment,
  decrement,
};
