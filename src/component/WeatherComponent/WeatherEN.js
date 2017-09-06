import React from 'react'

//import component
import Weekdaytmp from './Weekdaytmp'


class WeatherEN extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			weather:this.props.weather,
			classname:null
		}
	}


	componentDidUpdate(nextProps, nextState) {
		if (this.props.weather !== nextProps.weather){
			this.Transfrom(this.props.weather.text)
		}
	}

	componentDidMount() {
		if(this.state.weather.text) {
			this.Transfrom(this.state.weather.text)
		}
	}
	
	Transfrom(state){
		if(state.indexOf('多云') > -1 ){
				this.setState({
					text:'Cloudy',
					classname:'icon-duoyun'
				})
			}
			if(state.indexOf('晴') > -1 && state.length<4){
				this.setState({
					text:'Sun',
					classname:'icon-qingtian',
				})
			}
			if(state.indexOf('雨') > -1){
				this.setState({
					text:'Rainy',
					classname:'icon-zhongyu'
				})
			}
			if(state.indexOf('雪') > -1){
				this.setState({
					text:'Snow',
					classname:'icon-daxue'
				})
			}
			if(state.indexOf('阴') > -1){
				this.setState({
					text:'Overcast',
					classname:'icon-duoyunzhuanyin'
				})
			}
	}

	render(){
		if(this.props.getIcon === 'icon'){
			return <p><i className={`icon iconfont ${this.state.classname}`}></i></p>
		}else if(this.props.getIcon === 'future'){
			return(
				<div className='weatherTitle' id="weatherTitle">
					<div>
						<Weekdaytmp weather={this.props.weather}/>
						<p>{this.state.text} </p>
					</div>
				</div>
			)
		}else{
			return(
				<div className='weatherTitle' id="weatherTitle">
					<p>{this.props.weather.day}</p>
					<div>
						<Weekdaytmp weather={this.props.weather}/>
						<p>{this.props.weather.text} </p>
					</div>
				</div>
			)			
		}
	}
}

export default WeatherEN