import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASS} from '../button/button.component';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import {SignInContainer} from './sign-in-form.styles.jsx'

const defaultFormFields = {
    email:'',
    password: ''
};

function SignInForm() {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    async function signInWithGoogle () {
        await signInWithGooglePopup();
    }



    function resetFormFields(){
        setFormFields(defaultFormFields);
    }

    async function handleSubmit(event) {

        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);

            resetFormFields();
        } catch (error) {
            if(error.code ==='auth/wrong-password' || error.code==='auth/user-not-found'){
                alert('Incorrect password or email');
            } else{
                console.log(error);
            }
        }
    }

    function handleChange (event) {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
    }

    return(
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} >
                <FormInput
                    label = 'Email'
                    type = 'email'
                    onChange = {handleChange}
                    name = 'email'
                    value = {email}
                    required
                /> 

                <FormInput
                    label = 'Password'
                    type = 'password'
                    onChange = {handleChange}
                    name ='password'
                    value = {password}
                    required
                />
                <div className ='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button buttonType={BUTTON_TYPE_CLASS.google} type='button' onClick={signInWithGoogle}>Sign In With Google</Button>
                </div>
            </form>
        </SignInContainer>

    )
}

export default SignInForm