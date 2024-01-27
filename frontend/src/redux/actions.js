export const GET_NOTES = "GET_NOTES";
export const ADD_NOTE = "ADD_NOTE";

export const getNotes = ()=>{
    // return function(dispatch){
    //     fetch("")
    //     .then((response)=>response.json())
    //     .them((data)=>dispatch({type:GET_NOTES, payload:data}))
    // }

    return {
        type: GET_NOTES, 
        payload: []
    };
};

let id = 0;
export const addNote = (title, content)=>{
    id=id+1;
    return {
        type: ADD_NOTE, 
        payload: {id: id, title: title, content:content}
    };
}
