import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';

class VideoPlayer extends Component{

	state={
		pause: true,
	}

	togglePlay = (event) => {

		this.setState({
			pause: !this.state.pause
		});
	}

	componentDidMount(){
		this.setState({
			pause: (!this.props.autoplay)
		})
	}

	render() {
		return(
			<VideoPlayerLayout>
				<Title title="Este es un video bonito!!"/>
				<PlayPause 
					pause={this.state.pause}
					handleClick={this.togglePlay} 
				/>
				<Video 
					src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
					autoplay={this.props.autoplay}
					pause={this.state.pause}
				/>
			</VideoPlayerLayout>
			);
	}
}

export default VideoPlayer;