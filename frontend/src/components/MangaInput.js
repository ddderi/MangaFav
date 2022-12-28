import React, { Component, useState } from 'react';
import { connect } from "react-redux";
import { addManga, postManga } from '../slicer/mangaSlice';
import uuid from 'react-uuid';
import { useForm } from 'react-hook-form';
// redux 
// dispatch est utiliser pour appeler la function post create async thunk
// use selector est utiliser pour aller le state manga 
import { useDispatch, useSelector } from "react-redux";
import { Button, Checkbox, Form } from 'semantic-ui-react'

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
        <div style={{width: '30%', margin: 'auto'}} >
    <Form onSubmit={handleSubmit((data) => {
        // console.log(data)
        dispatch(postManga(data))
        reset()
    })}>
    <Form.Field>
    <label htmlFor='name' >Manga name : </label>
    <input {...register('name')} type='text' required={true} minLength={2} />
    </Form.Field>
    <Form.Field>
    <label htmlFor='description' >Manga description : </label>
    <input {...register('description')} type='text' required={true} minLength={2} />
    </Form.Field>
    <Form.Field>
    <label htmlFor='image' >Manga image : </label>
    <input {...register('image')} type='text' required={true} />
    </Form.Field>
    <Button type='submit' >Submit your manga</Button>
  </Form>
  </div>
  )

}





export default MangaInput



// const mapDispatchToProps = dispatch => {
//   return {
//       addManga: manga => {
//           dispatch(addManga(manga))
//       }
//   }
// };