import React, { Component } from 'react';

import Spectrum from '../components/Spectrum/Spectrum';

class SpectrumContainer extends Component {

    handleChange = (e) => {

    }

    onSelect = (e) => {

    }

    handleMouseDown = (e) => {

    }

    render() {
        return (
            <Spectrum
                handleChange={this.handleChange}
                handleMouseDown={this.handleMouseDown}
                onSelect={this.onSelect}
                handleMouseUp={this.handleMouseUp}

            />
        );
    }
}

export default SpectrumContainer;