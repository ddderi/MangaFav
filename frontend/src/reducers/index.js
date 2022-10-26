import { combineReducers } from "redux";
import mangas from './mangas'

const rootReducer = combineReducers({
    mangas: mangas
})

export default rootReducer