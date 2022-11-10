import React from "react"
import { useSelector, useDispatch } from "react-redux";
import {  counterDecrement,counterIncrement } from "./Redux/Actions/Counteraction";
const Counter=()=>{
    const dispatch= useDispatch()
    const counter= useSelector(state=>state.number)

    return(
        <div>
            <h1>Counter is: {counter}</h1>

            <button onClick={()=>dispatch(counterIncrement())}>Increment</button>
            <button onClick={()=>dispatch( counterDecrement())}>Decrement</button>
            
        </div>
    )
}
export default Counter