//import React 
import React from 'react'

//import CSS
import './less/Suggestion.less'

class Suggestion extends React.Component{
	constructor(props) {
		super(props)
		this.state={
			date:[]
		}
	}

	componentWillUpdate(nextProps) {
		if(this.props.date !== nextProps.date){
			console.log(nextProps.date)
		}
	}

	render(){
		return(
			<div className='userAction'>
				{console.log(this.props.date)}
			</div>
		)
	}
}

export default Suggestion