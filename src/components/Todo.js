import React from "react";

export function Todo(props) {
  return (
    <div className="todo">
      <h1 onClick={() => props.toggle(props.todo.id)} className={props.todo.completed ? "completed" : null}>
        {props.todo.task}
      </h1>
    </div>
  );
}
