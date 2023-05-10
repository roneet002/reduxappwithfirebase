import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {counterAction} from '../src/store/CounterStore'

const Counter = () => {
const dispatch = useDispatch();
const counter = useSelector((state)=>{
return(state.counter.counter);  
});

const showToggle = useSelector(state => state.counter.showToggle);

const incrementHandler = () =>{
    dispatch(counterAction.increment());
}
const decrementHandler = () =>{
    dispatch(counterAction.decrement());
}
const increasebyFive = () =>{
    dispatch(counterAction.increase(5));
}
const toggleBtnHandler = () =>{
    dispatch(counterAction.showToggle());
}

    return (
    <>
      <div className="card">
        {showToggle ? <><div>{counter}</div>
        <button type="button" onClick={incrementHandler}>Increment</button>
        <button type="button" onClick={decrementHandler}>Decrement</button>
        <button type="button" onClick={increasebyFive}>Increase by 5</button>
</> : ''}
                <div style={{display:'block'}}>
            <button type="button" onClick={toggleBtnHandler}>Toggle Button</button>
        </div>
         </div>
    </>
  );
};

export default Counter;
