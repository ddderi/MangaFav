import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import Manga from '../components/Manga';

//redux 

import { removeManga, upvoteManga, downvoteManga, getMangas, deleteManga } from '../slicer/mangaSlice'
import { useDispatch, useSelector } from "react-redux";



function Mangas() {

  const dispatch = useDispatch()
  const mangaState = useSelector(state => state.mangas)
  const mangas = mangaState.mangas


  useEffect(() => {
    dispatch(getMangas())
  }, [dispatch])

  const handleDelete = (id) => {
    dispatch(deleteManga(id))
  }

  return (
    <>

      {mangas ?
        <div className='mangacont'>
          {mangas.map((manga, index) => { return <Manga handleDelete={handleDelete} key={index} deleteManga={deleteManga} upvoteManga={upvoteManga} downvoteManga={downvoteManga} removeManga={removeManga} manga={manga} /> })}
        </div>
        : <h2>You don't fav any manga</h2>}
    </>
  )
}




export default connect()(Mangas)