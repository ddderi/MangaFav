import React, { Component, useState } from 'react';
import { connect } from "react-redux";
import { addManga, postManga } from '../slicer/mangaSlice';
import uuid from 'react-uuid';
import { useForm } from 'react-hook-form';
// redux 
// dispatch est utiliser pour appeler la function post create async thunk
// use selector est utiliser pour aller le state manga 
import { useDispatch, useSelector } from "react-redux";


// class MangaInput extends Component {


 // constructor(props) {
    //     super(props)
    //     this.state = {
    //       name: '',
    //       description: '',
    //       // votes: 0
    //     }
    //   }

function MangaInput(){

//const allManga = useSelector((state) => state.mangas)
const { register, handleSubmit, reset } = useForm()
const [name, setName] = useState('')
const [description, setDescription] = useState('')

const dispatch = useDispatch()

//console.log(allManga)
// const handleOnChange = (event) => {
//     const { value, name, description } = event.target;
//     setName(event.target.value)
//     setDescription(event.target.value)
//     console.log(name)
//     this.setState({
//       [name]: value
//     });
    
//   }

 // const newManga = {...this.state, id: uuid()}
 // this.props.addManga(newManga)
// ici en bas 


// const handleOnSubmit = (event) => {
//   event.preventDefault();
//   console.log(name)
//   //console.log(mangas)
//   // dispatch(postManga(newManga))
//   // alert(JSON.stringify(newManga));
// }


  
    return (
        <div>
        <form onSubmit={handleSubmit((data) => {
            // console.log(data)
            dispatch(postManga(data))
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





export default connect(null, { addManga })(MangaInput)



// const mapDispatchToProps = dispatch => {
//   return {
//       addManga: manga => {
//           dispatch(addManga(manga))
//       }
//   }
// };