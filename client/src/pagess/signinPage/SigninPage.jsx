import React from 'react'

import Signin from '../../components/sign-in/Signin'
import SignUp from '../../components/signup/SignUp'


import './SigninPage.scss'

function SigninPage() {
    return (
        <div className="sign-in-and-sign-up">
            <Signin />
            <SignUp />
        </div>
    )
}

export default SigninPage;
