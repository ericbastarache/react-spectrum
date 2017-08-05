import React, { Component } from "react";
import "./ColorVal.css";

class ColorVal extends Component {
	render() {
		return (
			<div className="push-down">
				<label>
					{this.props.identifier.split("-").join(" ")}:
				</label>
				<input
					id={this.props.identifier}
					type="text"
					placeholder="Color value"
					onChange={this.props.handleColorChange}
					value={this.props.setVal}
					disabled={this.props.isEnabled}
				/>
			</div>
		);
	}
}

export default ColorVal;
