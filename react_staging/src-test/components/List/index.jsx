import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
// <ul className="todo-main">
// {
// 	todos.map( todo =>{
// 	return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
// })
// }
// </ul>
	//对接收的props进行：类型、必要性的限制
	static propTypes = {
		todos:PropTypes.array.isRequired,
		updateTodo:PropTypes.func.isRequired,
		deleteTodo:PropTypes.func.isRequired,
	}

	render() {
		const {todos,updateTodo,deleteTodo} = this.props
		console.log(todos, '1')
		return (
			<ul>
				{
					todos.map((item) => {
						return <Item {...item} key={item.id}></Item>
					})
				}
			</ul>
		)
	}
}