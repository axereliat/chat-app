import React from 'react';
import {Route, Switch} from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import NotFound from "./NotFound";
import {PrivateRoute} from "./PrivateRoute";
import ChatRoom from "../chats/ChatRoom";

const Routes = () => {
    return <Switch>
        <PrivateRoute exact path='/' component={ChatRoom}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
        <Route component={NotFound}/>
    </Switch>
};

export default Routes
