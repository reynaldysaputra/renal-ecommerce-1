import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Furniture from '../Page/Furniture/Furniture';
import Help_page from '../Page/Help_page/help';
import Magazine from '../Page/Magazine/magazine';
import NewIn from '../Page/New_IN/newIn';
import SignIn from '../Page/SignIn/signin';

function Application() {
    return(
            <BrowserRouter forceRefresh>
                <Navigation/>

                <Switch>
                    <Route exact path='/' component={NewIn} />
                    <Route  path='/furniture' component={Furniture} />
                    <Route  path='/magazine' component={Magazine} />
                    <Route  path='/help' component={Help_page} />
                    <Route  path='/signin' component={SignIn} />
                </Switch>        
            </BrowserRouter>
    )
}

export default Application;