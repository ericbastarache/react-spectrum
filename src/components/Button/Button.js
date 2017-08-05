import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <div>
                <button
                    id={this.props.btnId}
                    className="btn-add-swatch"
                    onClick={this.props.onClick}>
                    {this.props.buttonText}
                </button>
            </div>
        );
    }
}

export default Button;