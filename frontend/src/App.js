import "./App.css";
import Form from "./components/form/Form";
import Notes from "./components/notes/Notes";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL, NOTES } from "./constants";
import FormEdit from "./components/formEdit/FormEdit";

function App() {
  const [notes, setNotes] = useState([]);
  const [notesArchived, setNotesArchived] = useState([]);
  const [notesRendered, setNotesRendered] = useState([]);
  const [modify, setModify] = useState(false);
  const [archived, setArchived] = useState(false);

  const handleClick = () => {
    setModify(!modify);
  };

  useEffect(() => {
    axios.get(`${URL}${NOTES}?archived=false`).then(({ data }) => {
      setNotes(data);
      setNotesRendered(data);
    });
    axios.get(`${URL}${NOTES}?archived=true`).then(({ data }) => {
      setNotesArchived(data);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="title">Notes Application</h1>
      <div className="contents">
        {modify ? (
          <FormEdit
            notes={notes}
            setNotes={setNotes}
            notesArchived={notesArchived}
            setNotesArchived={setNotesArchived}
            setNotesRendered={setNotesRendered}
            archived={archived}
          />
        ) : (
          <Form
            setNotes={setNotes}
            setNotesRendered={setNotesRendered}
            archived={archived}
          />
        )}

        <a className="link" onClick={handleClick}>
          {modify ? "Create Note" : "Modify Note"}
        </a>
      </div>
      <div className="contents notes">
        <Notes
          notes={notes}
          setNotes={setNotes}
          setNotesArchived={setNotesArchived}
          notesArchived={notesArchived}
          setNotesRendered={setNotesRendered}
          notesRendered={notesRendered}
          archived={archived}
          setArchived={setArchived}
        />
      </div>
    </div>
  );
}

export default App;
