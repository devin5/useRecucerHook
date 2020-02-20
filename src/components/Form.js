import React from "react";
import useForm from "./hooks/useForm";

export function Form(props) {
  const [form, onChange] = useForm();
  console.log("form", form);
  return (
    <form onSubmit={(e) => props.add(e, form)}>
      <label>new todo</label>
      <input onChange={onChange} value={form} id="form" name="form" placeholder="im a new todo" />
      <button type="submit">submit</button>
      <button onClick={ (e) => props.filter(e)}>filter</button>

    </form>
  );
}
