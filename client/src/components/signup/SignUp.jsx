import React, {useState} from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/FormInput';
import CustomButton from '../customButton/CustomButton';

import {signUpStart} from '../../reducer/user/userActions';

import './SignUp.scss';

const initialState = {
    displayName:'',
    email: '' ,
    password: '',
    confirmPassword:''
};

function SignUp ({signUpStart}) {
    const [values,setValues] = useState(initialState);

    const handleChanges = e => {
        const {name, value} = e.target;
        setValues({...values, [name]:value});
    };

    const {email, password, displayName, confirmPassword} = values;
    const handleSubmit = async e => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert("passwords don't match")
            return;
        };
        signUpStart({displayName,email,password});
    };
    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span> Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>

                <FormInput
                    type="text"
                    name='displayName'
                    value={values.displayName}
                    handleChanges={handleChanges}
                    label="Display Name"
                    required
                />
                <FormInput
                    type="email"
                    name='email'
                    value={values.email}
                    handleChanges={handleChanges}
                    label="Email"
                    required
                />

                <FormInput
                    type="password"
                    name='password'
                    value={values.password}
                    handleChanges={handleChanges}
                    label="password"
                    required
                />

                <FormInput
                    type="password"
                    name='confirmPassword'
                    value={values.confirmPassword}
                    handleChanges={handleChanges}
                    label="Confirm Password"
                    required
                />
                <CustomButton type='submit'> SIGN UP</CustomButton>
            </form>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null,mapDispatchToProps)(SignUp);
