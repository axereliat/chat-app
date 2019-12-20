import React from 'react';
import {Route, Switch} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import NotFound from "./NotFound";

const Routes = () => {
    return <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
        <Route component={NotFound}/>
    </Switch>
};

export default Routes
