import axios from "axios";
import { useState } from "react";
import s from "../components/contacts/contact.module.css";

function FormSubscribe({ toggleShowBackdrop, course }) {
  const [formValue, setFormValue] = useState("");

  const sendSubscribe = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/submit", {
      phone: formValue,
      course,
    });
    setFormValue("");
  };

  return (
    <form
      onSubmit={sendSubscribe}
      className={s.subscribe_form}
      autoComplete="off"
    >
      <input
        className={s.subscribe_form__input}
        type="tel"
        placeholder="Your phone"
        onChange={(e) => setFormValue(e.target.value)}
        value={formValue}
      />
      <button className={s.btn} type="submit" onClick={toggleShowBackdrop}>
        Send
      </button>
    </form>
  );
}

export default FormSubscribe;
