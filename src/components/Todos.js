import React from 'react'

const Todos = ({todos , deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="todo-item" key={todo.id}>
                    <span>{todo.content}</span>
                    <button className="deleteButton" onClick={() => {deleteTodo(todo.id)}}>
                    <i className="fa fa-trash-alt"></i></button>
                </div>
            )
        })
    ) : (
    <p className="center">You have no todo's left!</p>
    )
    return(
        <div className="">
            {todoList}
        </div>
    )
}

export default Todos;