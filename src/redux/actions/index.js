export const LIKE_SONG = "LIKE_SONG"
export const UNLIKE_SONG = "UNLIKE_SONG"
export const GET_SONGS = "GET_SONGS"
export const CREATE_PLAYLIST = "CREATE_PLAYLIST"
export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST"

export const likeSongAction = (song) =>  ({
    type: LIKE_SONG,
    payload: song
})

export const unlikeSongAction = (song) =>  ({
    type: UNLIKE_SONG,
    payload: song
})

export const createPlaylistAction = (title) => ({
    type: CREATE_PLAYLIST,
    payload: title
})

export const addToPlaylistAction = (title, song) => ({
    type: ADD_TO_PLAYLIST,
    payload: {title: title, song: song}
})

export const getSongsAction = (query) => {
    const headers = {
        'X-RapidAPI-Key': '1fd0bc5ccfmshf2b04cf36ba473ap157883jsnb65aff44a460',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
    const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

    return async (dispatch, getState) => {
        try {
            const res = await fetch(url + query, {headers: headers})
            if (res.ok) {
                const data = await res.json()
                const songs = data.data
                dispatch({
                    type: GET_SONGS,
                    payload: {query: query, songs: songs}
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}