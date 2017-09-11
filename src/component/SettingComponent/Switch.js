//import React { Component, PropTypes }
import React, { Component, PropTypes } from 'react'

//import CSS
import './less/Switch.css'

export default class Switch extends React.Component{
	render(){
		return(
			<div className={this.props.component} 
					style={{
						display:'flex',
						justifyContent: 'space-between',
						alignItems:'center',
					}}>
					<p style={{fontSize:'1.0rem',color:'rgba(0,0,0,.6)'}}>{this.props.text}</p>
					<div className='row'>
						<input type='checkbox' defaultChecked={this.props.show} id={this.props.component} className='switch' onChange={this.props.onChange}/>
						<label htmlFor={this.props.component} className='green'></label>
					</div>
			</div>			
			
		)
	}
}

Switch.propTypes = {
	onChange:PropTypes.func.isRequired,
	component:PropTypes.string.isRequired,
	show:PropTypes.bool.isRequired,
	text:PropTypes.string.isRequired
}