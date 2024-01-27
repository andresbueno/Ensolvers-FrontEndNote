import Note from '../note/Note'

export default function Notes(props) {
    return <div>
      
        <h1>Notes</h1>
        <table>
         <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Content</td>
            <td>Archive</td>
            <td>Delete</td>
         </tr>
            {
               props.notes.map((item)=>(
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