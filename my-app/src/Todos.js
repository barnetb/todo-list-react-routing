import React from 'react'

export default function Todos({todos, completeTodo}) { //destructuring
    
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <ul className="list-group list-group-horizontal-sm" key={todo.id}>
                    <li className="list-group-item list-group-item-dark" style={{color: "whitesmoke", background: "rgba(25, 25, 25, 0.2)"}}>
                        <strong>{todo.content}</strong>
                        <span>&emsp;<button style={{background: "red"}} onClick={() => {completeTodo(todo.id)}}>✖</button></span>
                        <span>&emsp;<button style={{background: "green"}}onClick={() => {completeTodo(todo.id)}}>✔</button></span>
                    </li> 
                </ul>
            )
        })
    ) :  (
        <p className= "center" style={{color:"whitesmoke", textAlign:"center", fontSize:"20px"}}><strong>Wow, such empty...</strong></p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}
