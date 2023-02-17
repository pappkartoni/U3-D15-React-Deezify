import { CREATE_PLAYLIST, ADD_TO_PLAYLIST } from "../actions";

const initialState = {
    playlists: [
        {
            title: "Now playing",
            songs: [{
                "id": 980535602,
                "readable": true,
                "title": "Rapp Snitch Knishes (feat. Mr. Fantastik)",
                "title_short": "Rapp Snitch Knishes (feat. Mr. Fantastik)",
                "title_version": "",
                "link": "https://www.deezer.com/track/980535602",
                "duration": 172,
                "rank": 614765,
                "explicit_lyrics": true,
                "explicit_content_lyrics": 1,
                "explicit_content_cover": 2,
                "preview": "https://cdns-preview-4.dzcdn.net/stream/c-4a0915dfaa749d75ab36147247406e32-3.mp3",
                "md5_image": "eb41db75ea6b22ad495876e7fa944bb4",
                "artist": {
                    "id": 2857,
                    "name": "MF Doom",
                    "link": "https://www.deezer.com/artist/2857",
                    "picture": "https://api.deezer.com/artist/2857/image",
                    "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/ebb583c45b7fbfece119196ea0db7811/56x56-000000-80-0-0.jpg",
                    "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/ebb583c45b7fbfece119196ea0db7811/250x250-000000-80-0-0.jpg",
                    "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/ebb583c45b7fbfece119196ea0db7811/500x500-000000-80-0-0.jpg",
                    "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/ebb583c45b7fbfece119196ea0db7811/1000x1000-000000-80-0-0.jpg",
                    "tracklist": "https://striveschool-api.herokuapp.com/api/deezer/artist/2857/top?limit=50",
                    "type": "artist"
                },
                "album": {
                    "id": 152555282,
                    "title": "MM..FOOD",
                    "cover": "https://api.deezer.com/album/152555282/image",
                    "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/eb41db75ea6b22ad495876e7fa944bb4/56x56-000000-80-0-0.jpg",
                    "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/eb41db75ea6b22ad495876e7fa944bb4/250x250-000000-80-0-0.jpg",
                    "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/eb41db75ea6b22ad495876e7fa944bb4/500x500-000000-80-0-0.jpg",
                    "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/eb41db75ea6b22ad495876e7fa944bb4/1000x1000-000000-80-0-0.jpg",
                    "md5_image": "eb41db75ea6b22ad495876e7fa944bb4",
                    "tracklist": "https://api.deezer.com/album/152555282/tracks",
                    "type": "album"
                },
                "type": "track"
            }]
        }
    ]
}

const playlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PLAYLIST:
            return {
                ...state,
                playlists: [...state.playlists, {title: action.payload.title, songs: []}]
            }

        case ADD_TO_PLAYLIST:
            const index = state.playlists.findIndex(pl => pl.title === action.payload.title)
            return {
                ...state,
                playlists: [
                    ...state.playlists.slice(0, index),
                    {title: action.payload.title, songs: [...state.playlists[index].songs, action.payload.song]},
                    ...state.playlists.slice(index + 1)
                ]
            }
            
        default:
            return state
    }
}

export default playlistReducer