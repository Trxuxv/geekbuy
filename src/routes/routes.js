import Home from '../pages/home';
import SignIn from '../pages/login';
import React from 'react';
import { Switch, Route  } from 'react-router-dom';


export function Routes()
{
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/home">
                <Home/>
            </Route>

            <Route exact path="/login">
                <SignIn/>
            </Route>
            
            
        </Switch>
    );
}