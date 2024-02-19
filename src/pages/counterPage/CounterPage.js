import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function CounterPage () {

    const title = useSelector(state => state.counterValue)
    const dispatch = useDispatch()


    const increment = () => {
      dispatch({
        type: 'INCREMENT',
        payload: title+1
      })
    }

    const decrement = () => {
      dispatch({
        type: 'DECREMENT',
        payload: title-1
      })
    }

    const plusTen = () => {
      dispatch({
        type: 'PLUS_TEN',
        payload: title+10
      })
    }

    const reset = () => {
      dispatch({
        type: 'RESET',
        payload: 0
      })
    }
    
    
  return (
    <div>
        <h1>{ title }</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={plusTen}>+10</button>
        <button onClick={reset}>Очистить</button>
    </div>
  );
}
