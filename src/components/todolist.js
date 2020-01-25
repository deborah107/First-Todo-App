import React, { useEffect } from 'react'
import Todo from "./todo";
import { useSelector, useDispatch } from 'react-redux'
import { editTodo, addTodo, changeStatusTodo, deleteTodo as actionDeleteTodo } from '../store/actions'

function fetchData() {
  return fetch('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
    .then((response) => {
      return response.json();
    })
}

export default function TodoList() {
  const todos = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    fetchData().then(resp => {
      console.log(resp)
      resp.forEach(item => dispatch(addTodo(item)))
    })
  }, [dispatch])

  const toggleDone = (todo) => {
    dispatch(changeStatusTodo({
      id: todo.id,
      status: todo.status === 1 ? 0 : 1,
    }))
  }
const edit = (todo) => {
  dispatch(editTodo({
    id: todo.id,
    title: todo.title,
    description: todo.description,
  }))
}
  const deleteTodo = (todo) => {
    dispatch(actionDeleteTodo(todo.id))
  }

  return (
    <div>
      <div className="hero is-info">
        <div className="hero-body has-text-centered">
          <p className="title is-1">{todos.length} Todos</p>
        </div>
      </div>

      <div className="container">
      <div className="columns">
        <div className="column">
        <p className="title is-2"> Active Todo</p>
        {todos
        .filter(todo => todo.status === 1)
        .sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map(todo => (
            <Todo key={todo.id} todo={todo} edit={edit} toggleDone={toggleDone} deleteTodo={deleteTodo} />
          ))}
        </div>
        <div className="column">
        <p className="title is-2"> Complete Todo</p>
        {todos
        .filter(todo => todo.status === 0)
        .sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt))
        .map(todo => (
            <Todo key={todo.id} todo={todo} edit={edit} toggleDone={toggleDone} deleteTodo={deleteTodo} />
          ))}
        </div>
    </div>
    </div>
    </div>
  )
}

