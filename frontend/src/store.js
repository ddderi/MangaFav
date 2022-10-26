import { configureStore } from "@reduxjs/toolkit"
import mangaReducer from './slicer/mangaSlice';

const store = configureStore({
    reducer: { mangas: mangaReducer}});

export default store;



// import { configureStore } from "@reduxjs/toolkit"
// import rootReducer from './reducers/index';


// const store = configureStore({
//     reducer: rootReducer});

// export default store;

