import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import Manga from '../components/Manga';

//redux 

import { removeManga, upvoteManga, downvoteManga, getMangas, deleteManga, upvotingManga } from '../slicer/mangaSlice'
import { useDispatch, useSelector } from "react-redux";



function Mangas() {

  const dispatch = useDispatch()
  const mangaState = useSelector(state => state.mangas)
  const mangas = mangaState.mangas

const [manga, setManga] = useState([])


  useEffect(() => {
    dispatch(getMangas())
  }, [dispatch])

  const handleDelete = (id) => {
    dispatch(deleteManga(id))
  }

  const handleUpvotingManga = (id) => {
    dispatch(upvotingManga(id))
  }

  return (
    <>
      {console.log(mangas)}
      {mangas.length>0 ?
        <div className='mangacont'>
          {mangas.map((manga, index) => { return <Manga handleDelete={handleDelete} key={index} handleUpvotingManga={handleUpvotingManga} manga={manga} /> })}
        </div>
        : <h2>You don't fav any manga</h2>}
    </>
  )
}




export default connect()(Mangas)