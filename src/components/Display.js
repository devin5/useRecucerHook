import React from "react";
import {Todo} from '../components/Todo'

export function Display(props) {
  console.log(props);
  return <div>
  {props.todos.map(i => <Todo toggle={props.toggle} key={i.id} todo={i} />)}
  </div>;
}
