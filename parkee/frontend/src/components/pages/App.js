import React from "react";
import { render } from 'react-dom';
import Home from "./Home";
import Registration from "./Registration";
import Parking from "./Parking";
import Login from "./Login";
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";


export default function App() {
    return (
        <div>
            <div className="black-strip">
                Parkee
            </div>
            <div className="all">
                <BrowserRouter>
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/registration' component={Registration} />
                        <Route path='/parking' component={Parking} />
                        <Route path='/login' component={Login} />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}


const appDiv = document.getElementById("app");

render(<App/>, appDiv);
