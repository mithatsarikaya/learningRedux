// import { useState } from "react";
import "./App.css";
import type { RootState } from "./store";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  makeItZero,
} from "./features/counter/counterSlice";
import { getAge, getName } from "./features/userInfo/userInfo";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const { name, age } = useSelector((state: RootState) => state.userInfo);
  console.log(name, age);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => dispatch(getName(e.currentTarget.value))}
        />
        <input
          type="text"
          placeholder="age"
          onChange={(e) => dispatch(getAge(parseInt(e.currentTarget.value)))}
        />
      </div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(12))}
        >
          byamount
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(makeItZero())}
        >
          makeItZero
        </button>
      </div>
    </div>
  );
}

export default App;
