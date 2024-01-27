import style from './Note.module.css'

export default function Note(props) {
    return (
        <tr>
            <td className={style.column}>{props.id}</td>
            <td className={style.column}>{props.title}</td>
            <td className={style.column}>{props.content}</td>
            <td className={style.column}><input type="checkbox" name="is_archived"/></td>
            <td className={style.column}>x</td>
        </tr>
    );
 }