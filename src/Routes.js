import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Finance from './components/Finance';
import Notifications from './components/Notifications';
import Others from './components/Others';
import Service from './components/Service';
import Subscriptions from './components/Subscriptions';



const Routes = () => {
    return(
        <Switch >
            <Route exact path="/finance" component={Finance} />
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/others" component={Others} />
            <Route exact path="/subscriptions" component={Subscriptions} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/" component={Login} />
            <Route exact path="/Home" component={Home} />
        </Switch>
    )
}

export default Routes;