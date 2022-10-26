import React from 'react';



function Manga({ manga, upvoteManga, handleDelete, downvoteManga, deleteManga }) {
    


  return (
    
    <div className='manga'>
            <h5>{manga.name}</h5>
            <p>{manga.description}</p>
        <div className="buttonbot">
            <button onClick={() =>{handleDelete(manga.id)}} >X</button>
            <button onClick={() => {upvoteManga(manga.id)}} >upvote</button>
            <button onClick={() => {downvoteManga(manga.id)}} >downvote</button> 
         </div>

    </div>
  )
}



export default Manga