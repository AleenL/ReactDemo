//import React 
import React from 'react'

//import React-router
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

//import component
import Weather from './WeatherComponent/Background'
import SettingHome from './SettingComponent/SettingHome'
import SettingChilren from './SettingComponent/SettingChildren'
import Suggestion from './SuggestionComponent/Suggestion'




export default class Routers extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			url:['userAccount','changePassword','componentSetting','cityChoose','colorSetting','About','getAdioce','loginOut']
		}
	}	
	render(){
		const { location } = this.props
   		const isModal = !!(
      		this.previousLocation !== location // not initial render
    	)		
		return(
			<Router location={isModal?this.previousLocation : location}>
				<div className='Home'>
					<Switch>
						<Route exact path='/' component={Weather} />
						<Route exact path='/Setting' component={SettingHome} />
						{this.state.url.map((value,index) => {
							const url = '/Setting/'+value
							return <Route key={index} path={url} component={SettingChilren}/>
						})}
						<Route exact path='/Suggestion' component={Suggestion} />
					</Switch>
				</div>
  			</Router>			
		)
	}
}

const SettingChild = ({ location }) => {
	return(<div>
		<div className='userAction' id={location.state.action}>
			<p><Link to='/Setting'><i className='iconfont'>&#xe603;</i></Link></p>
			<p>{location.state.number}</p>

		</div>
	</div>)
}


