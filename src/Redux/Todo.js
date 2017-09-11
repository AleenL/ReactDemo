import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <li 
        className='Switch'
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          color:this.props.completed ? 'red' : 'blue',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}>
        <input type='checkbox' defaultChecked={this.props.completed}  className='switch' />
        {this.props.text}
      </li>
    )
  }
}



Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}