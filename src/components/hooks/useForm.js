import { useState } from "react";

const useForm = (e) => {
  const [form, setForm] = useState("");

  const onChange = (e) => {
    setForm(e.target.value);
  };

  return [form, onChange];
};

export default useForm;
