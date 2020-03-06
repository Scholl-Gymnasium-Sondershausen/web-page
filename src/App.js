import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import StartSeite from "./screens/StartSeite";
import RepresentationPlan from "./screens/RepresentationPlan";
import DritteSeite from "./screens/DritteSeite";
import VierteSeite from "./screens/VierteSeite";
import FünfteSeite from "./MasterDetail";


class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Navigation />
                    <Switch>
                        <Route exact path="/first" component={StartSeite} />
                        <Route exact path="/Stundenplan" component={RepresentationPlan} />
                        <Route exact path="/third" component={DritteSeite} />
                        <Route exact path="/fourth" component={VierteSeite} />
                        <Route exact path="/fifth" component={FünfteSeite} />
                    </Switch>
                </Router>


            </>
        );
    }
}

export default App;
