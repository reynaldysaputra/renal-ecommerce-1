import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from '../navigation/navigation';
import NewIn from '../Page/New_IN/newIn';

function Application() {
    return(
            <BrowserRouter forceRefresh>
                <Navigation/>

                <Switch>
                    <Route exact path='/' component={NewIn} />
                    <Route  path='/furniture' component={b} />
                    <Route  path='/magazine' component={c} />
                    <Route  path='/help' component={d} />
                    <Route  path='/signin' component={e} />
                </Switch>        
            </BrowserRouter>
    )
}

const b = () =>  <h1>B</h1>;
const c = () =>  <h1>C</h1>;
const d = () =>  <h1>D</h1>;
const e = () =>  <h1>E</h1>;

export default Application;