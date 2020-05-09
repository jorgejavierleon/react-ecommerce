import React from 'react'

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSgnIn, ...otherProps}) => (
    <button className={`${isGoogleSgnIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton
