import React from "react";
import {
  Route,
  Redirect,
  Switch,
  HashRouter as Router
} from "react-router-dom";
import Login from '../containers/Login/Login';
import Home from '../containers/Home/Home';
import Main from '../components/Main/Main';
import Cards from '../components/Cards/Cards';
import GrayCard from '../components/GrayCard/GrayCard';
import ColorfulCard from '../components/ColorfulCard/ColorfulCard';

const routes = ()=>(
    <Router>
        <Switch>
            <Route path="/" exact={true} render={() => <Redirect to="/login" />} />
            <Route path="/login" component={Login} />
            <Route
                path="/home"
                component={props => (
                    <Home {...props}>
                        <Route path="/home/main" component={Main} />
                        <Route
                        path="/home/cards"
                        component={props => (
                            <Cards {...props}>
                                <Route path="/home/cards" exact={true} component={GrayCard}/>
                                <Route path="/home/cards/colorfulcard" component={ColorfulCard} />
                            </Cards>
                        )}/>
                    </Home>
                )}
            />
        </Switch>
    </Router>
)

export default routes;