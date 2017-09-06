//import react
import React from 'react'

//import css
import './NextWeek.css'

//import component
import Weekdaytmp from './Weekdaytmp'
import WeatherEN from './WeatherEN'

class NextWeek extends React.Component{
	constructor(props) {
		super(props)
		this.state={
			future:[]
		}
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.future !== nextProps.future){
			this.setState({future:nextProps.future})
		}
	}

	render(){
		return(
			<div className='NextWeekWeather'>
				{this.state.future.map((value,index)=>{
					if(index>=6) return;
					if(this.props.getDate === 'weather'){
						return (
							<div className='iconList' key={index}>
								<WeatherEN weather={value} getIcon='icon'/>
								<p>{value.day}</p>
							</div>
						)						
					}else{
						return (
							<div className='iconList' key={index}>
								<Weekdaytmp weather={value}/>
								<p>{value.day}</p>
							</div>
						)						
					}
				
				})}
			</div>
		)
	}
}

export default NextWeek
