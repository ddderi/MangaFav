import React, { useState } from 'react';
import MangaInput from './MangaInput';
import { updateManga } from "../slicer/mangaSlice"



function Manga({ manga, upvoteManga, handleDelete, downvoteManga }) {
    
const [showinput, setShowinput] = useState(false)

const showForm = () => {
  setShowinput(!showinput)
}

  return (
    
    <div className='manga'>
            <h5>{manga.name}</h5>
            <p>{manga.description}</p>
        <div className="buttonbot">
          <button onClick={() => showForm()}>click</button>
              {showinput && (
              <MangaInput queryapi={updateManga} />
              )}
            <button onClick={() =>{handleDelete(manga.id)}} >X</button>
            <button onClick={() => {upvoteManga(manga.id)}} >upvote</button>
            <button onClick={() => {downvoteManga(manga.id)}} >downvote</button> 
         </div>

    </div>
  )
}



export default Manga