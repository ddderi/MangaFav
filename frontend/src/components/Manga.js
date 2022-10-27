import React, { useState } from 'react';
import MangaInput from './MangaInput';


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
          <button onClick={() => showForm()}>Update manga</button>
              {showinput && (
              <MangaInput manga={manga}/>
              )}
            <button onClick={() =>{handleDelete(manga.id)}} >X</button>
            <button onClick={() => {upvoteManga(manga.id)}} >upvote</button>
            <button onClick={() => {downvoteManga(manga.id)}} >downvote</button> 
         </div>

    </div>
  )
}



export default Manga