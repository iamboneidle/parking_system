import React from 'react'
import MyRegistration from '../registrationCard/MyRegistration';


export default function Registration({ setIsLoggedIn }) {
    return (
        <MyRegistration setIsLoggedIn={ setIsLoggedIn } />
    )
}
