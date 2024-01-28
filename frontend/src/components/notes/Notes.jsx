import { useState, useEffect } from 'react';
import Note from '../note/Note'
import style from './Notes.module.css'

export default function Notes(props) {

   const [archived, setArchived] = useState(false);

   const handleclick=()=>{
      setArchived(!archived);      
   }

   useEffect(()=>{
      if(archived){
         props.setNotesRendered(props.notesArchived)
      }else {
         props.setNotesRendered(props.notes)
      }
   },[archived])

   return <div>
      <button onClick={handleclick}>{archived?"Show Actived":"Show Archived"}</button>
      <h1 className={style.title}>{archived?"Notes Archived":"Notes Actived"}</h1>
      <table className={style.table}>
      <tr>
         <td className={style.column}>Id</td>
         <td className={style.column}>Title</td>
         <td className={style.column}>Content</td>
         <td className={style.column}>Archive</td>
         <td className={style.column}>Delete</td>
      </tr>
         {
            props.notesRendered?.map((item)=>(
               <Note
               id={item.id}
               title={item.title}
               content={item.content}
               showedNotes={archived?props.setNotesArchived:props.setNotes}
               noShowedNotes={!archived?props.setNotesArchived:props.setNotes}
               setNotesRendered={props.setNotesRendered}
               />
               ))
               
         }
      </table>
   </div>;
}