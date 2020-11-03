import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from '../navigation/navigation';

function Application() {
    return(
            <BrowserRouter forceRefresh>
                <Navigation/>

                <Switch>
                    <Route exact path='/' component={a} />
                    <Route  path='/furniture' component={b} />
                    <Route  path='/magazine' component={c} />
                    <Route  path='/help' component={d} />
                    <Route  path='/signin' component={e} />
                </Switch>        
            </BrowserRouter>
    )
}

const a = () =>  <h1>A</h1>;
const b = () =>  <h1>B</h1>;
const c = () =>  <h1>C</h1>;
const d = () =>  <h1>D</h1>;
const e = () =>  <h1>E</h1>;

export default Application;