import React, { useState, useEffect } from "react";
import { render } from 'react-dom';
import Home from "./Home";
import Registration from "./Registration";
import Parking from "./Parking";
import Login from "./Login";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";


export default function App() {
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     console.log(isLoggedIn)
    // }, [isLoggedIn])

    return (
        <div>
            <div className="black-strip">
                Parkee
            </div>
            <div className="all">
                <BrowserRouter>
                    <Switch>
                        <Route path='/home'>
                            <Home isLoggedIn={ isLoggedIn }/>
                        </Route>
                        <Route path='/registration' >
                            <Registration setIsLoggedIn={ setIsLoggedIn }/>
                        </Route>
                        <Route path='/login' >
                            <Login setIsLoggedIn={ setIsLoggedIn }/>
                        </Route>
                        <Route path='/parking' component={ Parking } />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}


const appDiv = document.getElementById("app");

render(<App/>, appDiv);
