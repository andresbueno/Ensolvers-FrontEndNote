import './App.css';
import Form from './components/form/Form';
import Notes from './components/notes/Notes';

// const notes=[
//   {
//     id:1,
//     title:"titulo1",
//     content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ad rem debitis.",
//     is_archived:false
//   },
//   {
//     id:2,
//     title:"titulo2",
//     content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ad rem debitis.",
//     is_archived:false
//   },
//   {
//     id:3,
//     title:"titulo3",
//     content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ad rem debitis.",
//     is_archived:false
//   },
// ]

function App() {
  return (
    <div className="App">
      <h1 className='title'>Notes Application</h1>
      <div className='contents'>
        <Form/>
      </div>
      <div className='contents notes'>
        <Notes /* notes={notes} *//>
      </div>
    </div>
  );
}

export default App;
