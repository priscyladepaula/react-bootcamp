import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todos'
import '../App.css'

export default function TodoList({ todos, toggleTodo }) {
    return (
        <>
            <div id="todo-list">
                {todos.map(todo => (
                    <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
                ))}
            </div>
        </>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
}