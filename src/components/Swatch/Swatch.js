import React, { Component } from 'react';
import './Swatch.css';

class Swatch extends Component {
    render() {
        return (
            <div className="swatch">
                <span onClick={this.props.removeSwatch} id={this.props.colorText}>X</span>
                <div className="swatch-color" style={{ 'backgroundColor': this.props.paletteCol }}></div>
                <div id={this.props.colorText} className="col-text">{this.props.colorText}</div>
            </div>
        );
    }
}

export default Swatch;