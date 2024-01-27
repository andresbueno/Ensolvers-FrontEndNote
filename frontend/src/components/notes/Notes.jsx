import { useEffect } from 'react';
import Note from '../note/Note'
import style from './Notes.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getNotes } from '../../redux/actions';

export default function Notes(props) {

   const notes = useSelector((state)=>state.notes);
   const dispatch = useDispatch();

   useEffect(()=>{
      dispatch(getNotes());
   }, [])

   return <div>
   
      <h1 className={style.title}>Notes</h1>
      <table className={style.table}>
      <tr>
         <td className={style.column}>Id</td>
         <td className={style.column}>Title</td>
         <td className={style.column}>Content</td>
         <td className={style.column}>Archive</td>
         <td className={style.column}>Delete</td>
      </tr>
         {
            notes.map((item)=>(
               <Note
                  id={item.id}
                  title={item.title}
                  content={item.content}
               />
            ))

         }
      </table>
   </div>;
}