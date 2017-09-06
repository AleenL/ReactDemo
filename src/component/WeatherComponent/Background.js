//import React 
import React from 'react'
import { render } from 'react-dom'

//import React-router
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

//import CSS
import './Background.css'
//import component
import GetLocation from './GetLocation'

class Background extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			date : new Date(),
			imageUrl: [require('./image/Blood.png'),require('./image/Moon.png'),require('./image/Sun.png')],
			Weather:{},

		}
	}
	
	componentDidMount() {
		setInterval(() => this.setState({date:new Date}),100000)
	}

	render(){	
		const hours = this.state.date.getHours()
		let BackgroundUrl = null
		switch(parseInt(hours/8))
		{
			case 0:
				console.log(hours)
				BackgroundUrl = this.state.imageUrl[0];
				break;
			case 1:
				BackgroundUrl = this.state.imageUrl[2];
				break;
			default:
				BackgroundUrl = this.state.imageUrl[1];
				break;
		}
			
		return(
			<div className="Background" style={{backgroundImage:'url('+BackgroundUrl+')'}}>
				<Route exact  path='/' component={GetLocation}/>
			</div>
		)
	}	
}

export default Background