import React, { Component } from 'react';

export default class Image extends Component {
	static defaultProps = {
		source: {
			mob: '',
			desk: ''
		},
		size: {
			min: '',
			max: ''
		},
		class: ''
	};

	createSource(size, path, format) {
		return <source media={`(${size})`} srcSet={`${path}, ${path} 2x`} type={`image/${format}`} />;
	}

	createImgSet(path) {
		return (
			<img
				className={this.props.class}
				src={`${path}`}
				srcSet={`${path} 2x`}
				alt={this.props.alt}
			/>
		);
	}

	render() {
		return (
			<picture>
				{/* PNG/JPG */}
				{this.props.source.mob &&
				this.props.source.desk &&
				this.props.source.mob.length > 0 &&
				this.props.source.desk.length > 0
					? this.createSource(this.props.size.min, this.props.source.desk, this.props.defaultFormat)
					: null}

				{this.props.source.mob && this.props.source.mob.length > 0
					? this.createImgSet(this.props.source.mob)
					: this.createImgSet(this.props.source.desk)}
			</picture>
		);
	}
}
