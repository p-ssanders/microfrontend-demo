import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import MicroFrontend from "./MicroFrontend";

const appOneHost = "http://localhost:8081";
const appTwoHost = "http://localhost:8082";

const AppHeader = () => (
    <div className="Composite-app">
        <header className="Composite-app-header">
            Composite UI
            <div>
                <Link to="/appone" className="App-link">App One</Link>
                <Link to="/apptwo" className="App-link">App Two</Link>
            </div>
        </header>
    </div>
);

const AppOne = ({ history }) => (
    <MicroFrontend history={history} name="AppOne" host={appOneHost} />
);

const AppTwo = ({ history }) => (
    <MicroFrontend history={history} name="AppTwo" host={appTwoHost} />
);

const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <AppHeader />
            <Switch>
                <Route exact path="/appone" component={AppOne} />
                <Route exact path="/apptwo" component={AppTwo} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);

export default App;
