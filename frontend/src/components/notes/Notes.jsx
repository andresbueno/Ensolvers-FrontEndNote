import { useState, useEffect } from 'react';
import Note from '../note/Note'
import style from './Notes.module.css'

export default function Notes(props) {

   const handleclick=()=>{
      props.setArchived(!props.archived);      
   }

   useEffect(()=>{
      if(props.archived){
         props.setNotesRendered(props.notesArchived)
      }else {
         props.setNotesRendered(props.notes)
      }
   },[props.archived])

   return <div>
      <button className={style.button} onClick={handleclick}>{props.archived?"Show Actived":"Show Archived"}</button>
      <h1 className={style.title}>{props.archived?"Notes Archived":"Notes Actived"}</h1>
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
               showedNotes={props.archived?props.setNotesArchived:props.setNotes}
               noShowedNotes={!props.archived?props.setNotesArchived:props.setNotes}
               setNotesRendered={props.setNotesRendered}
               />
               ))
               
         }
      </table>
   </div>;
}