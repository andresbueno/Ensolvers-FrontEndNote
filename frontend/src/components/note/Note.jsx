export default function Note(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.content}</td>
            <td><input type="checkbox" name="is_archived"/></td>
            <td>x</td>
        </tr>
    );
 }