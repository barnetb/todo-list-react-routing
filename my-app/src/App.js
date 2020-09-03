import React, { Component } from 'react'
import Todos from './Todos'
import './App.css'
import logo from './todo_logo_1.png'
import AddTodo from './AddTodo'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
          {id: 1, content: 'Clean the house', completed: false},
          {id: 2, content: 'Wash the dishes', completed: false},
          {id: 3, content: 'Bake red velvet cookies', completed: false},
          {id: 4, content: 'Shop for a cool car', completed: false},
      ],  
    }
  }

  completeTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }  

  addTodo = (todo) => {
    todo.id = Math.random()
    var todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div>
        <div className="logo" style={{textAlign: "center"}}>
            <img src={logo} alt="logo"/>
            <AddTodo addTodo={this.addTodo}/> 
        </div>
        <div className="todo-app container">
          <Todos todos={this.state.todos} completeTodo={this.completeTodo}/>
        </div>
      </div>
    )
  }
}

// export default App



