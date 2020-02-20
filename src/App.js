import React, { useReducer } from "react";
import { Form } from "./components/Form";
import "./App.css";
import { Display } from "./components/Display";
import { initialState, reducer } from "./reducers/index";

function App() {
  const [state, dipatch] = useReducer(reducer, initialState);

  const addToDo = (e, todo) => {
    e.preventDefault();
    dipatch({ type: "ADD_TODO", payload: todo });
  };
  const tCo = id => {
    dipatch({ type: "TOGGLE_TODO", payload: id });
  };
  const fTo = e => {
    e.preventDefault();
    dipatch({ type: "FILTER_TODO" });
  }

  // console.log("state", state);
  return (
    <div className="App">
      <Form filter={fTo} add={addToDo}/>
      <Display  toggle={tCo} todos={state.todos} />
    </div>
  );
}

export default App;
