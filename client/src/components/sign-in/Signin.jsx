import React, {useState} from 'react';
import {connect} from 'react-redux';


import {googleSignInStart, emailSignInStart} from '../../reducer/user/userActions';

import FormInput from '../form-input/FormInput';
import CustomButton from '../customButton/CustomButton';

import './Signin.scss';

const initialState = {
    email:'',
    password: ''
};

const Signin = ({googleSignInStart, emailSignInStart}) => {
    const [values, setValues] = useState(initialState);

    const handleChanges = (e) => {
        const {name,value} = e.target;
        setValues({...values, [name]:value});
    };

    const handleSubmit = async e => {
        e.preventDefault()
        const {email, password} = values
        emailSignInStart(email,password)
    };
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span> Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                name="email" 
                type="email" 
                value={values.email} 
                label="email"
                required 
                handleChanges={handleChanges}/>

                <FormInput 
                name="password" 
                type="password" 
                value={values.password} 
                label="password"
                required 
                handleChanges={handleChanges}/>

                <div className="buttons">
                    <CustomButton type="submit"> Sign in</CustomButton>
                    <CustomButton 
                        type='buttton'
                        onClick={googleSignInStart} 
                        isGoogleSignIn> 
                        {''} Sign in with Google {''}
                    </CustomButton>
                </div>
                
            </form>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({
        email,
        password
    }))
});

export default connect(null,mapDispatchToProps)(Signin);
