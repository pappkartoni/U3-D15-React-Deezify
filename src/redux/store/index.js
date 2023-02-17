import { configureStore, combineReducers  } from '@reduxjs/toolkit'
import likedReducer from '../reducers/likedReducer'
import playlistReducer from '../reducers/playlistReducer'
import songsReducer from '../reducers/songsReducer'
import { persistStore, persistReducer } from 'redux-persist'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import sessionStorage from 'redux-persist/es/storage/session'

const persistConfig = {
    key: "root",
    storage: sessionStorage,
    transforms: [
      encryptTransform({
        secretKey: process.env.REACT_APP_ENV_SECRET_KEY,
      })
    ]
  }
  
  const persistedReducer = persistReducer(persistConfig, combineReducers({
    liked: likedReducer,
    playlists: playlistReducer,
    songs: songsReducer
  }))

  const store = configureStore({
    reducer: persistedReducer, 
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        })
    },
  })

  const persistedStore = persistStore(store)

  export {store, persistedStore}