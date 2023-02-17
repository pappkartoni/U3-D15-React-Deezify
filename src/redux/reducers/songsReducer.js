import { GET_SONGS } from "../actions";

const initialState = {
    queryList: [],
}

const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SONGS: 
            return {
                ...state,
                queryList: [...state.queryList, action.payload]
            }
        
        default:
            return state
    }
}

export default songsReducer