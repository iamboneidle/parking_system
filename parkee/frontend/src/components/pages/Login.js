import React from 'react';
import MyLogin from '../loginCard/MyLogin';


export default function Login({ setIsLoggedIn }) {

    return (
        <MyLogin setIsLoggedIn={ setIsLoggedIn } />
    )
}
