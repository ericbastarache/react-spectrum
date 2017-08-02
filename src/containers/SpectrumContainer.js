import React, { Component } from 'react';

import Spectrum from '../components/Spectrum/Spectrum';

class SpectrumContainer extends Component {
    render() {
        return (
            <Spectrum
                handleChange={this.handleChange}
                onSelect={this.onSelect}

            />
        );
    }
}

export default SpectrumContainer;