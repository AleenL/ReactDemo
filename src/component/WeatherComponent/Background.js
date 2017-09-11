//import React 
import React from 'react'

//import LESS
import './less/Background.less'

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
	
	//页面主要是更新背景图片


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
				<GetLocation />
			</div>
		)
	}	
}

export default Background