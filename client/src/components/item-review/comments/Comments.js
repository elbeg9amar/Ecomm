import React from 'react';



import {
    CommentText,
    CommentColumn
} from './Comments.styled'

function ItemReviewComments({text,name}) {
    return (
        <CommentText>
        <CommentColumn>
            <h1>{name}</h1>
            <h1>{text}</h1>
        </CommentColumn>
        </CommentText>
    )
}

export default ItemReviewComments;
