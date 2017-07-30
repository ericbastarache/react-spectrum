import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import SpectrumContainer from './containers/SpectrumContainer';

class App extends Component {
    render() {
        return ( 
            <div>
                <Header headerText="React Spectrum" />
                <SpectrumContainer />
            </div>
        );
    }
}

export default App;