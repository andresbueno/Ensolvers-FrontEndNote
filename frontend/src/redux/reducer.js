import { GET_NOTES, ADD_NOTE } from "./actions";

const initialState = {
    notes:[]
}

const rootReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_NOTES:
            return {...state, notes: action.payload}
        case ADD_NOTE:
            return {...state, notes:[...state.notes, action.payload]};
        default:
            return {...state};
    }
}

export default rootReducer;