import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Finance from './components/Finance';
import Annual from './components/Annual';
import Monthly from './components/Monthly';
import Trial from './components/Trial';
import Notifications from './components/Notifications';
import Others from './components/Others';
import Service from './components/Service';
import Subscriptions from './components/Subscriptions';
import SusOne from './components/SusOne';
import Monthlyservice from './components/Monthlyservice';
import SerOne from './components/SerOne';
import Notificationspush from './components/Notifications2';



const Routes = () => {
    return(
        <Switch >
            <Route exact path="/Notificationspush" component={Notificationspush} />
            <Route exact path="/serone" component={SerOne} />
            <Route exact path="/monthlyservice" component={Monthlyservice} />
            <Route exact path="/product" component={SusOne} />
            <Route exact path="/annual" component={Annual} />
            <Route exact path="/monthly" component={Monthly} />
            <Route exact path="/trial" component={Trial} />
            <Route exact path="/finance" component={Finance} />
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/others" component={Others} />
            <Route exact path="/subscriptions" component={Subscriptions} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/" component={Login} />

        </Switch>
    )
}

export default Routes;