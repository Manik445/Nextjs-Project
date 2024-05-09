import React from 'react'
import { increment , decrement } from './counterslices'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch(); 
    const counter = useSelector(state => state.count.value); 
  return (

                <div>
            <div>Counter : {counter}</div>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(incrementByAmount(5))}>incrementByAmount</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
        </div>
  )
}

export default Counter