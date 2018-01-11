import React from 'react';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';

const PlayPause = (props) => (

	<div className="PlayPause">

		{
			props.pause?
			<button
				onClick={props.handleClick}
			>
				<Play 
					color="white"
					size={25}
				/>
			</button>
			:
			<button
				onClick={props.handleClick}
			>
				<Pause 
					color="white"
					size={25}
				/>
			</button>
			
		}

	</div>

);

export default PlayPause;