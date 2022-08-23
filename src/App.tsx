import React from "react";
import "./App.css";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { supabase } from "./supabaseClient";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App(): JSX.Element {
  // const counter = useAppSelector((state) => state.counter);
  // const dispatch = useAppDispatch();
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App">
        {/* <h1>{counter}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          INCREMENT
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          DECREMENT
        </button> */}
        <Products />
        <Cart />
      </div>
    </div>
  );
}

export default App;
