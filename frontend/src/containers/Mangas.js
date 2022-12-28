import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Manga from '../components/Manga';

//redux 

import { removeManga, upvoteManga, downvoteManga, getMangas, deleteManga, votingManga, downvotingManga } from '../slicer/mangaSlice'
import { useDispatch, useSelector } from "react-redux";



function Mangas() {

  const dispatch = useDispatch()
  const mangaState = useSelector(state => state.mangas)
  const mangas = mangaState.mangas


  useEffect(() => {
    dispatch(getMangas())
  }, [])

  const handleDelete = (id) => {
    dispatch(deleteManga(id))
  }

  const handleVote = (data) => {
    dispatch(votingManga(data))
  }

  const handledownVote = (data) => {
    dispatch(downvotingManga(data))
  }

  const mangaMapped = mangas.map((manga, index) => { return <Manga handledownVote={handledownVote} handleVote={handleVote} handleDelete={handleDelete} key={index} deleteManga={deleteManga} upvoteManga={upvoteManga} downvoteManga={downvoteManga} removeManga={removeManga} manga={manga} /> })

  return (
    <>
      {console.log('this is render')}
      <div className='mangacont'>
        {mangas && (
          mangaMapped
        )}
        {mangas.length == 0 && (
          <h2>You don't fav any manga</h2>
        )}
      </div>
    </>
  )
}




export default connect()(Mangas)