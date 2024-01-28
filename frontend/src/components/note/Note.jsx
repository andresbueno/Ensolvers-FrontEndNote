import style from './Note.module.css'
import axios from 'axios';
import {URL, NOTES} from '../../constants'


export default function Note(props) {
    const handleStatusSwitch = () => {
        // Realizar la solicitud Axios con el ID de la nota
        axios.patch(`${URL}${NOTES}/switch-status/${props.id}`, null, {
          headers: {
            'accept': '*/*'
          }
        })
        .then(response => {
          // Manejar la respuesta si es necesario
          props.noShowedNotes((prevNotes) => [
            ...prevNotes,
            { id: props.id, title: props.title, content: props.content },
          ]);
          props.showedNotes((prevNotes) =>
            prevNotes.filter(note => note.id !=props.id)
          );
          props.setNotesRendered((prevNotes) =>
            prevNotes.filter(note => note.id !=props.id)
          );
          console.log('Respuesta:', response.data);
        })
        .catch(error => {
          // Manejar el error si es necesario
          console.error('Error al cambiar el estado de la nota:', error);
        });
      };

      const handleStatusDelete = ()=>{
        axios.delete(`${URL}${NOTES}/${props.id}`, null, {
            headers: {
              'accept': '*/*'
            }
          })
          .then(response => {
            // Manejar la respuesta si es necesario
            props.showedNotes((prevNotes) =>
              prevNotes.filter(note => note.id !=props.id)
            );
            props.setNotesRendered((prevNotes) =>
              prevNotes.filter(note => note.id !=props.id)
            );
            console.log('Respuesta:', response.data);
          })
          .catch(error => {
            // Manejar el error si es necesario
            console.error('Error al cambiar el estado de la nota:', error);
          });
      }
    return (
        <tr>
            <td className={style.column}>{props.id}</td>
            <td className={style.column}>{props.title}</td>
            <td className={style.column}>{props.content}</td>
            <td className={style.column}><button onClick={handleStatusSwitch}>⛔</button></td>
            <td className={style.column}><button onClick={handleStatusDelete}>❌</button></td>
        </tr>
    );
 }