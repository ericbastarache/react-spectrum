import React, { Component } from "react";
import "./Spectrum.css";

class Spectrum extends Component {
	render() {
		return (
			<div>
				<input
					type="color"
					onInput={this.props.handleInput}
					onChange={this.props.extColChange}
					value={this.props.initialVal}
				/>
			</div>
		);
	}
}

export default Spectrum;
