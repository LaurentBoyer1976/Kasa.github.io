import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, About, accommodations, Error} from './src/Js/Pages';
import { Header, Footer, Error404, LayRoot} from './src/Js/Layouts';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
                <Route>
                    <Switch path="/Home" page={Home} />                    
                    <Switch path="/Accommodations" page={accommodations} />
                    <Switch path="/About" page={About} />
                    <Switch path= "*" page={Error} />
                </Route>
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);