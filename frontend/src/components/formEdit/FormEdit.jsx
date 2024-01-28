import style from "./FormEdit.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { URL, NOTES } from "../../constants";

export default function Form(props) {
  const [search, setSearch] = useState(false);

  const [formEdit, setFormEdit] = useState({
    id: "",
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setFormEdit({ ...formEdit, [property]: value });
  };
  const searchId = ()=>{
    setSearch(true);
  }

    useEffect(()=>{
      if(search){
        axios.get(`${URL}${NOTES}`).then(({ data }) => {
          let valueTitle = "";
          let valueContent = "";

          data.map((item)=>{
            if(item.id == formEdit.id){
              valueTitle = item.title;
              valueContent = item.content
            }
          
          });

          setFormEdit({id:formEdit.id, title:valueTitle, content:valueContent})
          setSearch(false);
        });
      }
    }, [search])

  const submitHandler = (event) => {
    event.preventDefault();
    const requestBody = {
      id: formEdit.id,
      title: formEdit.title,
      content: formEdit.content,
    };

    axios
      .patch(`${URL}${NOTES}/${formEdit.id}`, requestBody, {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        props.setNotes((prevNotes) => [
          ...prevNotes,
          {
            id: formEdit.id,
            title: response.data.title,
            content: response.data.content,
          },
        ]);
        console.log("Respuesta:", response.data);
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
      });
  };

  return (
    <form action="" className={style.form} onSubmit={submitHandler}>
      <h1 className={style.title}>Modify Notes</h1>
      <p>Please, enter the ID</p>
      <div>
        <label htmlFor="" className={style.label}>
          Id:
        </label>
        <input
          type="text"
          name="id"
          className={style.input}
          onChange={handleChange}
          value={formEdit.id}
        />
        <button onClick={searchId}>🔎</button>
      </div>
      <div>
        <label htmlFor="" className={style.label}>
          Title:
        </label>
        <input
          type="text"
          name="title"
          className={style.input}
          onChange={handleChange}
          value={formEdit.title}
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
          value={formEdit.content}
        ></textarea>
      </div>
      <button type="submit" className={style.button}>
        Modify
      </button>
    </form>
  );
}
