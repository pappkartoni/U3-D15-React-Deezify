import { LIKE_SONG, UNLIKE_SONG } from "../actions";

const initialState = {
    likedSongs: [],
}

const likedReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIKE_SONG:
            return {
                ...state,
                likedSongs: [...state.likedSongs, action.payload]
            }

        case UNLIKE_SONG:
            return {
                ...state,
                likedSongs: state.likedSongs.filter((el) => el.id !== action.payload.id)
            }

        default: 
            return state
    }
}

export default likedReducer