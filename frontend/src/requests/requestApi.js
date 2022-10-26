import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = "http://localhost:1234"

// export async function fetchMangas() {
//     try{
//         const result = await axios.get('http://localhost:1234/mangas')
//         return result.data
//     }catch(error){
//       console.log(error)
//     }
//   }


export const addManga = createAsyncThunk("ADD_MANGA", async(manga, {rejectWithValue}) =>{
    try{
   const result = await axios.post(baseURL + "/manga", manga)
    return result.data
    }catch(error){
        console.log(error)
        return rejectWithValue(error.response.data)
    }
});
