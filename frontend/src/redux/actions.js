import axios from "axios";

export const GET_NOTES = "GET_NOTES";
export const ADD_NOTE = "ADD_NOTE";


export const getNotes = () => {
  return function (dispatch) {
    return axios.get("http://localhost:8080/notes").then(({ data }) => {
      dispatch({type:GET_NOTES, payload:data.data});
    });
  };
};

let id = 0;
export const addNote = (title, content) => {
  id = id + 1;
  return {
    type: ADD_NOTE,
    payload: { id: id, title: title, content: content },
  };
};
