import React, { Component } from 'react';
import './Swatch.css';

class Swatch extends Component {
    render() {
        return (
            <div id={this.props.colorText} className="swatch" onClick={this.props.removeSwatch}>
                X
                <div className="swatch-color" style={{ 'backgroundColor': this.props.paletteCol }}></div>
                <div className="col-text">{this.props.colorText}</div>
            </div>
        );
    }
}

export default Swatch;