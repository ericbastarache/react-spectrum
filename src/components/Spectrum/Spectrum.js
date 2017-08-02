import React, { Component } from 'react';
import './Spectrum.css';

class Spectrum extends Component {
    render() {
        return (
            <div>
                <input
                    type="color"
                    onChange={this.props.handleChange}
                    onMouseMove={this.props.onSelect}
                    onMouseDown={this.props.handleMouseDown}
                    onMouseUp={this.props.handleMouseUp}
                />
            </div>
        );
    }
}

export default Spectrum;