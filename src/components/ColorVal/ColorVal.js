import React, { Component } from "react";
import "./ColorVal.css";

class ColorVal extends Component {
	render() {
		return (
			<div className="push-down">
				<label>
					{this.props.identifier.split("-").join(" ")} :
				</label>
				<input
					id={this.props.identifier}
					type="text"
					placeholder="Color value"
					value={this.props.setVal}
				/>
			</div>
		);
	}
}

export default ColorVal;
