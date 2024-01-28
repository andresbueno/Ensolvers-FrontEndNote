import style from "./FormEdit.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {URL, NOTES} from '../../constants'

export default function Form(props) {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const requestBody = {
      title: form.title,
      content: form.content,
    };

    axios
      .post(URL+NOTES, requestBody, {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        props.setNotes((prevNotes) => [
          ...prevNotes,
          { id: response.data.id, title: response.data.title, content: response.data.content },
        ]);
        console.log("Respuesta:", response.data);
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
      });
  };

  return (
    <form action="" className={style.form} onSubmit={submitHandler}>
      <h1 className={style.title}>Create Notes</h1>
      <div>
        <label htmlFor="" className={style.label}>
          Title:
        </label>
        <input
          type="text"
          name="title"
          className={style.input}
          onChange={handleChange}
          value={form.title}
        />
      </div>
      <div className={style.divArea}>
        <label htmlFor="" className={style.label}>
          Content:
        </label>
        <textarea
          name="content"
          id=""
          cols="30"
          rows="5"
          className={style.textarea}
          onChange={handleChange}
          value={form.content}
        ></textarea>
      </div>
      <button type="submit" className={style.button}>
        Create
      </button>
    </form>
  );
}
