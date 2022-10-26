import React from 'react';
import { connect } from "react-redux";
import { postManga } from '../slicer/mangaSlice';
import { useForm } from 'react-hook-form';
import { useDispatch} from "react-redux";


function MangaInput({queryapi}){

const { register, handleSubmit, reset } = useForm()
const dispatch = useDispatch()

    return (
        <div>
        <form onSubmit={handleSubmit((data) => {
            dispatch(queryapi(data))
            reset()
        })}>
            <label htmlFor='name' >manga name : </label><br></br>
            <input {...register('name')} type='text' required={true} minLength={2} /><br></br>
            <label htmlFor='description' >manga description : </label><br></br>
            <input {...register('description')} type='text' required={true} minLength={2} /><br></br>
            <button type='submit' >Submit your manga</button>
        </form>
    </div>
  )

}





export default connect()(MangaInput)



// const mapDispatchToProps = dispatch => {
//   return {
//       addManga: manga => {
//           dispatch(addManga(manga))
//       }
//   }
// };