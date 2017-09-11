import React, { Component, PropTypes } from 'react'
import Switch from './Switch'

export default class ComponentState extends Component{
	render(){	
		return(
			<div style={{width:'95%',margin:'0 auto'}} >
				{this.props.switch.map((value,index)=>
					<Switch {...value}
							key={index}
							onChange={() => this.props.onSwitchChange(index)} />
				)}
			</div>
		)
	}		
}

ComponentState.propTypes ={
	onSwitchChange:PropTypes.func.isRequired,
	switch:PropTypes.arrayOf(PropTypes.shape({
		text:PropTypes.string.isRequired,
		show:PropTypes.bool.isRequired,
		component:PropTypes.string.isRequired,
	}).isRequired).isRequired
}
