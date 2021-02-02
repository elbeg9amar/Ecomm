import React from 'react';


import FormInput from '../../form-input/FormInput';
import CustomButton from '../../customButton/CustomButton';

import {ReviewForm} from './reviewForm.styled'

function ItemReviewForm() {

    return (
        <ReviewForm>
        <form>
            <FormInput
            type="text"
            name='displayName'
            // value={values.displayName}
            // handleChanges={handleChanges}
            label="Name"
            required
            />
            <FormInput
                type="email"
                name='email'
                // value={values.email}
                // handleChanges={handleChanges}
                label="Email"
                required
                />
            <textarea
                type="text-area"
                rows="10" 
                cols="51"
                // value={values.displayName}
                // handleChanges={handleChanges}
                label="Add Comment"
                required
            />
            <CustomButton type='submit'>Add Comment</CustomButton>
    </form>
        </ReviewForm>
    )
}

export default ItemReviewForm;
