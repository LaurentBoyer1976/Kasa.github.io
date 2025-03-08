import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Accommodations, Error} from './src/Js/Pages';
import { Header, Footer} from './src/Js/Components';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
                <Routes>
                    <Route path="/Home" element={<Home />} />                    
                    <Route path="/Accommodations" element={<Accommodations />} />
                    <Route path="/About" element={<About />} />
                    <Route path= "*" element={<Error />} />
                </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);