import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import {SignUpContainer } from './sign-up-form.styles.jsx'
import Button from '../button/button.component';


const defaultFormFields ={
    displayName:'',
    email: '',
    password: '',
    confirmPassword: ''
};

function SignUpForm () {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword } = formFields;

    function resetFormFields () {
        setFormFields(defaultFormFields);
    }
    async function handleSubmit (event) {
        event.preventDefault();

        // Check Password
        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const {user } = await createAuthUserWithEmailAndPassword(email,password);
            
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();

        } catch (error) {
            if(error.code ==='auth/email-already-in-use'){
                alert('Cannot create user, email already in use');
            } else{
            console.log('user creation encounted an error', error);
            }
        }
       
        
        
    }

    function handleChange (event) {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
    }

    return(
        <SignUpContainer>
            <h2>I do not have an account</h2>
            <span >Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput
                    label ="Display Name"
                    type='text' 
                    onChange={handleChange} 
                    name='displayName' 
                    value={displayName} 
                    required
                />

                
                <FormInput
                    label ="Email"
                    type='email' 
                    onChange={handleChange} 
                    name='email' 
                    value={email} 
                    required
                />

                <FormInput
                    label = 'Password'
                    type='password'
                    onChange={handleChange} 
                    name='password' 
                    value={password} 
                    required

                />

                <FormInput
                    label = 'Confirm Password' 
                    type='password' 
                    onChange={handleChange}
                    name='confirmPassword' 
                    value={confirmPassword} 
                    required
                />

                <Button  type='submit'>Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;