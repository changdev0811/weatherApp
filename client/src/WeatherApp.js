import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import setToken from './utils/setToken';
import store from './store';

import ProtectedRoute from './components/ProtectedRoute';

import Header from './components/Header';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import MyData from './components/data/MyData';
import PostData from './components/data/PostData';

if(localStorage.token) {
    setToken(localStorage.token);
    const decoded = jwt_decode(localStorage.token);
        store.dispatch({
        type: 'SET_CURRENT_USER',
        payload: decoded
    });
}

class WeatherApp extends React.Component {

    constructor() {
        super();
    }
    render() {
        return (
            <BrowserRouter>
                 <div className="App">
                    <Header />
                    <div className="container">
                        <Route exact path='/' render={() => (<Redirect to="/login"/> )}/>
                        <Route exact path='/login' component={ Login }/>
                        <Route exact path='/register' component={ Register }/>
                        <Switch>
                            <ProtectedRoute exact path="/data" component={MyData} />
                            <ProtectedRoute exact path="/data/new" component={PostData} />
                        </Switch>
                    </div>
                 </div>
            </BrowserRouter>
        )
    }
}
  
export default WeatherApp;