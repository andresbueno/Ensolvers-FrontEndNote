
export default function Form(props) {

    
    return (
       <form action="">
        <div>
            <label htmlFor="">Title</label>
            <input type="text" name="title"/>
        </div>
        <div>
            <label htmlFor="">Content</label>
            <textarea name="content" id="" cols="30" rows="5"></textarea>
        </div>
        <button type="submit" >Create</button>
       </form>

    );
 }
 