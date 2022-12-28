import React from 'react';
import { Button, Icon, Label } from 'semantic-ui-react'

export default function ButtonLikes({handledownVote, handleVote, manga }) {

    const data = { id: manga.id, likes: manga.likes + 1}
    const downvoting = { id: manga.id, dislikes: manga.dislikes - 1}

    
    return (
        <div>
            <Button onClick={() => handleVote(data)} as='div' labelPosition='right'>
                <Button icon>
                    <i className="thumbs up icon"></i>
                    Like
                </Button>
                <Label as='a' basic pointing='left'>
                    {manga.likes}
                </Label>
            </Button>
            <Button onClick={() => handledownVote(downvoting)} as='div' labelPosition='left'>
                <Label as='a' basic pointing='right'>
                    {manga.dislikes}
                </Label>
                <Button icon>
                    <i className="thumbs down icon"></i>
                    Dislike
                </Button>
            </Button>
        </div>
    )
}
