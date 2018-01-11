import React, { Component } from 'react';
import './video.css';

class Video extends Component{

	togglePlay = (event) => {
		if(this.props.pause){
			// reproducir
			this.video.play();
		}else{
			//parar
			this.video.pause();
		}
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.pause !== this.props.pause){
			this.togglePlay();
		}
	}

	setRef = (element) => {
		this.video = element;
	}

	render(){
		return(
			<div className="Video">
				<video
					autoPlay={this.props.autoplay}
					src={this.props.src}
					ref={this.setRef}
				/>
			</div>
		);
	}
}

export default Video;