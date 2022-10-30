import React, { useState } from 'react';
import MangaInput from './MangaInput';


function Manga({ manga, upvoteManga, handleDelete, handleUpvotingManga }) {
    
const [showinput, setShowinput] = useState(false)

const showForm = () => {
  setShowinput(!showinput)
}


  return (
    
    <div className='manga'>
            <h5>{manga.name}</h5>
            <p>{manga.description}</p>
            <p>{manga.votes}</p>
        <div className="buttonbot">
          <button onClick={() => showForm()}>Update manga</button>
              {showinput && (
              <MangaInput manga={manga}/>
              )}
            <button onClick={() =>{handleDelete(manga.id)}} >X</button>
            <button onClick={() => {handleUpvotingManga(manga)}} >upvote</button>
            <button onClick={() => {console.log(manga.id)}} >downvote</button> 
         </div>

    </div>
  )
}



export default Manga