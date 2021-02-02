import React from 'react';

import ItemReviewComments from './comments/Comments';
import ItemReviewForm from './reviewForm/ReviewForm'

import {
    ItemReviewStyled,
    ItemCommentSec
} from './ItemReview.styled';

import dummyData from '../../dummydata';


function ItemReview() {
    
    return (
        <ItemReviewStyled>
            <ItemReviewForm />
                <ItemCommentSec>
                {
                    dummyData.map(data => (
                        data.comments.map(({comId, ...otherProps}) => (
                            <ItemReviewComments key={comId}  {...otherProps}/>
                        ))
                    ))
                }
                </ItemCommentSec>
        </ItemReviewStyled>
    )
}

export default ItemReview
