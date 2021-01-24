import React from 'react'


import {CustomButtonContainer} from './customButtonStyled'



const CustomButton = ({children,...props}) => (
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>
    )


export default CustomButton
