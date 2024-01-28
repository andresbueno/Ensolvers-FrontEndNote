import './App.css';
import Form from './components/form/Form';
import Notes from './components/notes/Notes';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {URL, NOTES} from './constants'

function App() {

  const [notes, setNotes] = useState([]);
  const [notesArchived, setNotesArchived] = useState([]);
  const [notesRendered, setNotesRendered] = useState([]);


  useEffect(()=>{
    axios.get(`${URL}${NOTES}?archived=false`).then(({ data }) => {
      setNotes(data)
      setNotesRendered(data)
    });
    axios.get(`${URL}${NOTES}?archived=true`).then(({ data }) => {
      setNotesArchived(data)
    });
  }, [])

  return (
    <div className="App">
      <h1 className='title'>Notes Application</h1>
      <div className='contents'>
        <Form setNotes={setNotes} />
      </div>
      <div className='contents notes'>
        <Notes  notes={notes} setNotes={setNotes} setNotesArchived={setNotesArchived} notesArchived={notesArchived} setNotesRendered={setNotesRendered} notesRendered={notesRendered}/>
      </div>
    </div>
  );
}

export default App;
