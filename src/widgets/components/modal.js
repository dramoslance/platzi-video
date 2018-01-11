import React from 'react'
import './modal.css'

function Modal(props){
	return(
		<div className="Modal">
			<p>Esto es un portal</p>
			{props.children}
			<button onClick={props.handleClick}>cerrar</button>
		</div>
	)
}

export default Modal