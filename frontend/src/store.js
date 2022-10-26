import { configureStore } from "@reduxjs/toolkit"
import mangaReducer from './slicer/mangaSlice';

const store = configureStore({
    reducer: { mangas: mangaReducer}});

export default store;


