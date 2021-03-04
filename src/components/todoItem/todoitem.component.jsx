import React, { Component } from 'react'
import './todoitem.component.css';
export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        const { id, title} = this.props.todo;
        return (
            <div className="todoitem" style={this.getStyle()}>
               
                <p> <input onChange={this.props.markComplete.bind(this,id)} type="checkbox" className="checkbox"/>{title}
                <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle} className='btn'>x</button>
                </p>
               
            </div>
        )
    }

    

}

let btnStyle = {
    background : 'red',
    border: 'none',
    margin: '5px 10px',
    borderRadius: '50%',
    color: 'white',
    float: 'right',
    cursor:'pointer'
}

export default TodoItem;