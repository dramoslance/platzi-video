import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import ErrorHandler from '../../errors/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';

class Home extends Component{
	
	state = {
		modalVisible: false,
	}

	handleOpenModal = () => {
		this.setState({
			modalVisible: true,
		})
	}

	handleCloseModal = (event) => {
		this.setState({
			modalVisible: false,
		})
	}

	render(){
		return(
			<ErrorHandler>
				<HomeLayout>
					<Related />
					<VideoPlayer 
						autoplay={false}
					/>
					<Categories 
						categories={this.props.data.categories}
						handleOpenModal={this.handleOpenModal}
						/>
					{ 

						this.state.modalVisible &&
						<ModalContainer>
							<Modal handleClick={this.handleCloseModal}>
								<h1>Esto es un modal</h1>
							</Modal>
						</ModalContainer>
					}
				</HomeLayout>
			</ErrorHandler>
		)
	}
}

export default Home