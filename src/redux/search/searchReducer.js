import { SET_SEARCH } from "./searchType"

const init={
    term: null
}


const searchReducer=(state=init,action)=>{
    switch(action.type){
        case SET_SEARCH: return{
            term: action.payload
        }
        default : return state
    }
}

export default searchReducer