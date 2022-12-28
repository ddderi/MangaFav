import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import ButtonLikes from './ButtonLikes';
import { Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from "react-redux";


function Manga({ handledownVote, handleVote, manga, upvoteManga,  downvoteManga, deleteManga }) {

  const data = { id: manga.id, likes: manga.likes + 1 }
  const downvoting = { id: manga.id, dislikes: manga.dislikes - 1 }
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteManga(id))
  }

  return (
    <Card>
      <Button onClick={() => handleDelete(manga.id)}  >Delete</Button>
      <Image  src={manga.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{manga.name}</Card.Header>
        <Card.Meta>
          <span className='date'></span>
        </Card.Meta>
        <Card.Description>
          {manga.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {/* <a>
        <Icon name='user' />
        22 Friends
      </a> */}
        <ButtonLikes handledownVote={handledownVote} handleVote={handleVote} manga={manga} />
      </Card.Content>
    </Card>
  )
}




export default Manga