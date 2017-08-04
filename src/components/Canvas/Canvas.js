import React, { Component } from "react";
import "./Canvas.css";

class Canvas extends Component {
	render() {
		return (
			<canvas
				ref={canvas => (this.canvas = canvas)}
				id="my-canvas"
				width={this.props.CanvasWidth}
				height={this.props.CanvasHeight}
				style={{ backgroundColor: this.props.Color }}
			/>
		);
	}
}

export default Canvas;
