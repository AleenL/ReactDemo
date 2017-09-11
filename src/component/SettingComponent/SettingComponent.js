import React,{ Component, PropTypes } from 'react'

//import component 
import ComponentState from './ComponentState'

import { createStore } from 'redux'
import { connect } from 'react-redux'
import { Switch } from '../../Redux/actionCounter';




class SettingComponent extends React.Component{
	render(){
		const {dispatch,Component} = this.props

		return(
			<div >
			{!this.props.action.indexOf('userAccount') && 
			<div className='UserAccount'>
				<p>账户</p>
				<p>{this.props.account}<i className='iconfont icon-gengduo'></i></p>
			</div>
			}
			{!this.props.action.indexOf('changePassword') && 
			<div className='changePassword'>
				<p>验证密码</p>
				<p><input type="text" placeholder='请输入注册时的邮箱'/></p>
				<p><input type="text" placeholder='请输入原密码'/></p>
				<button>下一步</button>
			</div>
			}
			{!this.props.action.indexOf('componentSetting') &&
				<ComponentState 
				switch={Component} 
				onSwitchChange={ index =>
            		dispatch(Switch(index))}/>
			}
			</div>
		)
	}
}



SettingComponent.PropTypes={
	Component:PropTypes.arrayOf(PropTypes.shape({
		text:PropTypes.string.isRequired,
		show:PropTypes.bool.isRequired,
		component:PropTypes.string.isRequired,		
	}).isRequired).isRequired
}

console.log(SettingComponent.PropTypes)

function selectTodos(ComponentState,filter) {
    return ComponentState;
}

function select(state) {
  return {
    Component: state.ComponentState.ComponentState
  }
}


export default connect(select)(SettingComponent); 