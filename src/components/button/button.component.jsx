import React from 'react'
import {BaseButton, GoogleSignInButton, InvertedButton} from './button.styles.jsx'


export const BUTTON_TYPE_CLASS= {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}


const getButton = (buttonType = BUTTON_TYPE_CLASS.base) =>(
    {
        [BUTTON_TYPE_CLASS.base]: BaseButton,
        [BUTTON_TYPE_CLASS.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASS.inverted]: InvertedButton
    }[buttonType]
)
function Button({children, buttonType, ...otherProps}) {
    const CustomButton = getButton(buttonType)
    return(
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>


    )
}

export default Button