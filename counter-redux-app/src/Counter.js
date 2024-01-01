import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement, reset } from "./createSlice";

const Counter= ()=>{
    const dispatch= useDispatch();
    const counter= useSelector((state)=> state.counter);

    return(
        <div>
             <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default Counter;