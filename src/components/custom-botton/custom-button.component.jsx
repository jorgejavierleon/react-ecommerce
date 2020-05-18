import React from 'react'

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSgnIn, inverted, ...otherProps}) => (
    <button className={`
        ${inverted ? 'inverted' : ''}
        ${isGoogleSgnIn ? 'google-sign-in' : ''} 
        custom-button
        `} {...otherProps}>
        {children}
    </button>
)

export default CustomButton
