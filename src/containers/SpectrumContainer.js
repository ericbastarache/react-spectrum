import React, { Component } from "react";

import Spectrum from "../components/Spectrum/Spectrum";
import Canvas from "../components/Canvas/Canvas";
import ColorVal from "../components/ColorVal/ColorVal";

class SpectrumContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: "#000",
			colorValue: "#000",
			rgbValue: "(0,0,0)"
		};
	}

	handleInput = e => {
		this.setState({
			color: e.target.value,
			colorValue: e.target.value,
			rgbValue: this.getRGBVal(e.target.value)
		});
	};

	getRGBVal = hex => {
		let res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		let rgb = () => {
			return res
				? {
						r: parseInt(res[1], 16),
						g: parseInt(res[2], 16),
						b: parseInt(res[3], 16)
					}
				: null;
		};
		return "(" + rgb(hex).r + ", " + rgb(hex).g + ", " + rgb(hex).b + ")";
	};

	render() {
		return (
			<div className="more-space">
				<Spectrum
					handleInput={this.handleInput}
					handleMouseDown={this.handleMouseDown}
					onSelect={this.onSelect}
					handleMouseUp={this.handleMouseUp}
				/>
				<Canvas CanvasWidth="150" CanvasHeight="150" Color={this.state.color} />
				<ColorVal identifier="hex-value" setVal={this.state.colorValue} />
				<ColorVal identifier="rgb-value" setVal={this.state.rgbValue} />
			</div>
		);
	}
}

export default SpectrumContainer;
