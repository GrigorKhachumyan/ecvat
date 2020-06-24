import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Main from './templates/main';
import CCV from './templates/CreateFreeCV/CCV/CCV';

const history=createBrowserHistory();

export default class Navigatio extends React.Component{
    render(){
        return(
            <>
             <BrowserRouter history={history}>
                <Route exact path="/" component={Main}/>
                <Route exact path="/create-cv" component={CCV}/>
             </BrowserRouter>
    
            </>
        )
    }
}