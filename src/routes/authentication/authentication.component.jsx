import React from 'react';
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import {FormContainer} from './authentication.styles.jsx';

function Authentication () {



    return (
        <FormContainer>
            <SignInForm />
            <SignUpForm />
        </FormContainer>
    )
}

export default Authentication;