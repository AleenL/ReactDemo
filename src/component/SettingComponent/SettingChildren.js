//import React 
import React from 'react'

//import React-router
import { Link } from 'react-router-dom'

//import component
import SettingComponent from './SettingComponent'

//import less
import './less/SettingComponent.less'

const SettingChildren = ({ location }) => {
	return(<div>
		<div className='userAction' id={location.state.action}>
			<div className='ComponentTitle'>
				<p><Link to='/Setting'><i className='iconfont'>&#xe603;</i></Link></p>
				<p>{location.state.number}</p>			
			</div>
			<SettingComponent action={location.state.action}/>
		</div>
	</div>)
}
export default SettingChildren