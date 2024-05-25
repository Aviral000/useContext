import React, { useReducer } from 'react';

const initialState = { count: 0, even: false };

const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case 'increment':
      newState = { ...state, count: state.count + 1 };
      break;
    case 'decrement':
      newState = { ...state, count: state.count - 1 };
      break;
    case 'reset':
      newState = { ...state, count: 0 };
      break;
    case 'double':
      newState = { ...state, count: state.count * 2 };
      break;
    case 'checkEven':
      newState = { ...state, even: state.count % 2 === 0 };
      break;
    default:
      throw new Error("Please choose the appropriate option");
  }
  newState.even = newState.count % 2 === 0;
  return newState;
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h5>{state.count}</h5>
      <h6>{state.even ? 'It is Even' : 'It is not Even'}</h6>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'double' })}>Double</button>
      <button onClick={() => dispatch({ type: 'checkEven' })}>Check Even</button>
    </div>
  );
}
