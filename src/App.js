import React, { Component } from 'react'
import './App.css';
import Todos from './components/todos/todos.component';
import AddTodo from './components/addTodo/addtodo.component';
import axios from 'axios';

export class App extends Component 
{
  constructor(props){
    super(props);
    this.state = {
      todos : []
    }
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })})
  }


  // delete todo
  delTodo = (id) => {
    axios.delete(`/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
    .catch(err => console.log(err));
    
  }


  // addTodo
  addTodo = (title) => {
    axios.post('/todos', {
      title,
      completed: false
    })
    .then(res => this.setState({todos: [...this.state.todos, res.data]}))
    .catch(err => console.log(err));
    
  }

  componentDidMount(){
    axios.get('/todos')
    .then(res => this.setState({todos: res.data}))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1 style={{
          textAlign: 'center',
          padding: '20px',
          marginTop: '10px'
        }}> Todo App</h1>
        <div className="form-add">
          <AddTodo addTodo={this.addTodo}/>
        </div>
        <div>
          <Todos 
          todos={this.state.todos}
          delTodo = {this.delTodo}
          markComplete={this.markComplete}
          />
        </div>
      </div>
    )
  }
}

export default App
