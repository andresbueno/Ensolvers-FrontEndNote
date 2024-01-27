import './App.css';
import Form from './components/form/Form';
import Notes from './components/notes/Notes';

const notes=[
  {
    id:1,
    title:"titulo1",
    content:"content1",
    is_archived:false
  },
  {
    id:2,
    title:"titulo2",
    content:"content2",
    is_archived:false
  },
  {
    id:3,
    title:"titulo3",
    content:"content3",
    is_archived:false
  },
]

function App() {
  return (
    <div className="App">
      <Form/>
      <Notes notes={notes}/>
    </div>
  );
}

export default App;
