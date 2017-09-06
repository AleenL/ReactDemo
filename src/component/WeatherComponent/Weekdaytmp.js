import React from 'react'


class WeekdayEN extends React.Component{
	render(){
		return <p>{this.props.weather.high}°/{this.props.weather.low}°</p>	
	}
}

export default WeekdayEN