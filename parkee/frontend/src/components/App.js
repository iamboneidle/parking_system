import React from "react";
import { render } from 'react-dom';
import Home from "./Home";
import Registration from "./Registration";
import Parking from "./Parking";
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
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}


const appDiv = document.getElementById("app");

render(<App/>, appDiv);
