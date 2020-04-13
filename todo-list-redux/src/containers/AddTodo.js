import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form id="todo" onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input placeholder="Escreva aqui" id="add-todo" ref={node => (input = node)} />
        <button id="button" type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)