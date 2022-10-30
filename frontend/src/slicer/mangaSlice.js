import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const baseURL = "http://localhost:1234"

const initialState = {
    mangas: []
}

export const updateManga = createAsyncThunk("mangas/updateManga", async(manga, {rejectWithValue}) =>{
    try{
        const { name, description, id } = manga
        const result = await axios.put(baseURL + `/manga/` + id, {name, description})
        return result.data
    }catch(error){
        console.log(error)
        return rejectWithValue(error.reponse.data)
    }
})


export const upvotingManga = createAsyncThunk("mangas/upvotingManga", 
async(manga, {rejectWithValue}) =>{
    try{
        const { name, description, id } = manga
        console.log(id)
        const result = await axios.patch(baseURL + `/manga/` + id)
        return result.data
    }catch(error){
        console.log(error)
        return rejectWithValue(error.response.data)
    }
})

export const deleteManga = createAsyncThunk("mangas/deleteManga",
async(id, {rejectWithValue}) => {
    try{
        const result = await axios.delete(baseURL + `/mangas/` + id)
        return result.data
    }catch(error){
        console.log(error)
        return rejectWithValue(error.response.data)
    }
})

export const getMangas = createAsyncThunk("mangas/getMangas",
 async(id = null, {rejectWithValue}) => {
    try{
        const result = await axios.get(baseURL + "/mangas")
        return result.data
    }catch(error){
        console.log(error)
        return rejectWithValue(error.response.data)
    }
 })

export const postManga = createAsyncThunk(
    "mangas/postManga", 
    async(manga, {rejectWithValue}) => {
    try{
        const { name, description} = manga
        const result = await axios.post(baseURL + "/manga", {name, description})
        return result.data
    }catch(error){
        console.log(error)
        return rejectWithValue(error.response.data)
    }
})

const mangaSlice = createSlice({
    name: 'mangas', 
    initialState,
    reducers: {
        addManga(state, action){
            state.mangas.push(action.payload)
        },
        removeManga(state, action){
            state.mangas = state.mangas.filter((manga) => manga.id !== action.payload)
        },
        upvoteManga(state, action){
            let index = state.mangas.findIndex((manga) => manga.id === action.payload)
            let manga = state.mangas[index]
            manga.votes+=1
        },
        downvoteManga(state, action){
            let index = state.mangas.findIndex((manga) => manga.id === action.payload)
            let manga = state.mangas[index]
            manga.votes-=1
        },
    },
    // dans le cas d'erreur, inserez un status afin de display les erreurs 
    // call API possible sont ici ds l extra reducers
    extraReducers: {
        [postManga.pending]: (state,action) => {
            return {
                ...state
            }
        },
        [postManga.fulfilled]: (state,action) => {
            state.mangas.push(action.payload[0])
            
        },
        [postManga.rejected]: (state,action) => {
            return {
                ...state
            }
        },
        [getMangas.pending]: (state,action) => {
            return {
                ...state
            }
        },
        [getMangas.fulfilled]: (state,action) => {
            return {
                ...state, mangas: action.payload
            }
        },
        [getMangas.rejected]: (state,action) => {
            return {
                ...state
            }
        },
        [deleteManga.pending]: (state,action) => {
            return {
                ...state
            }
        },
        [deleteManga.fulfilled]: (state,action) => {
            const newstate = state.mangas.filter((manga) => manga.id !== action.meta.arg)
            return {
                ...state, mangas: newstate
            }
            
        },
        [deleteManga.rejected]: (state,action) => {
            return {
                ...state
            }
        },
        [updateManga.pending]: (state,action) => {
            return {
                ...state
            }
        },
        [updateManga.fulfilled]: (state,action) => {
            console.log(action)
            const updatedManga = state.mangas.map((manga) => manga.id === action.meta.arg.id ? 
            action.meta.arg : manga)

            return {
                ...state, mangas: updatedManga
            }
            
        },
        [updateManga.rejected]: (state,action) => {
            return {
                ...state
            }
        },
        [upvotingManga.pending]: (state,action) => {
            return {
                ...state
            }
        },
        [upvotingManga.fulfilled]: (state,action) => {
           console.log(action)
            const updatedManga = state.mangas.map((manga) => manga.id === action.meta.arg.id ? 
            action.meta.arg : manga)
            

            
            return {
                ...state, mangas: updatedManga
        }
            
        },
        [upvotingManga.rejected]: (state,action) => {
            return {
                ...state
            }
        }
}
})



console.log(mangaSlice)

export const { addManga, removeManga, upvoteManga, downvoteManga } = mangaSlice.actions;

export default mangaSlice.reducer