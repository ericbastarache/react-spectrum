import React, { Component } from "react";

import Spectrum from "../components/Spectrum/Spectrum";
import Canvas from "../components/Canvas/Canvas";
import ColorVal from "../components/ColorVal/ColorVal";
import Button from '../components/Button/Button';
import Swatch from '../components/Swatch/Swatch';

class SpectrumContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: "#000",
			colorValue: "#000",
			rgbValue: "(0,0,0)",
			palette: []
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

	handleClick = e => {
		let arrVal = this.state.palette.slice();
		arrVal.push(this.state.colorValue);
		this.setState({ palette: arrVal });
	}

	handleColorChange = e => {
		this.setState({
			color: e.target.value,
			colorValue: e.target.value
		})

		// const eventType = e.type;
		e.persist();
		setTimeout(() => {
			this.setState({
				rgbValue: this.getRGBVal(e.target.value)
			})
		}, 4000)
	}

	renderSwatches = () => {
		return this.state.palette.map((p) => {
			return <Swatch key={p} paletteCol={p} colorText={p} removeSwatch={this.handleRemoveSwatch} />
		})
	}

	handleExternalCol = e => {
		this.setState({
			color: e.target.value,
			colorValue: e.target.value
		})
	}

	handleRemoveSwatch = (e) => {
		let arr = this.state.palette;
		let index = arr.indexOf(e.target.id);
		arr.splice(index, 1);

		this.setState({ palette: arr })
	}

	render() {
		return (
			<div>
				<div className="more-space">
					<Spectrum
						handleInput={this.handleInput}
						onSelect={this.onSelect}
						initialVal={this.state.colorValue}
						extColChange={this.handleExternalCol}
					/>
					<Canvas CanvasWidth="150" CanvasHeight="150" Color={this.state.color} />
					<ColorVal identifier="hex-value" setVal={this.state.colorValue} handleColorChange={this.handleColorChange} />
					<ColorVal isEnabled="disabled" identifier="rgb-value" setVal={this.state.rgbValue} handleColorChange={this.handleColorChange} />
					<Button btnId="add-swatch" buttonText="Add Swatch" onClick={this.handleClick} />
				</div>
				<div className="swatch-panel">
					{this.renderSwatches()}
				</div>
			</div>
		);
	}
}

export default SpectrumContainer;
