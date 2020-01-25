import React, { useState } from 'react'

export default function Todo(props) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [modal, setModal] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    props.edit({ id: props.todo.id, title, description })
    setModal(false)
  }

  return (
    <>
      <div className="card">
        <div className="card-content">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <div>
                  <p className={`title ${props.todo.status === 0 ? "has-text-grey-light" : ""}`}>{props.todo.title}</p>
                  <p className="is-medium">{props.todo.description}</p>
                  <p className="is-small">{new Date(props.todo.createdAt).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="level">
            <div className="level-right">
              <div className="level-item buttons">
                <button onClick={() => setModal(true)} className="button is-info has-text-weight-bold">Edit</button>
                <button onClick={props.toggleDone.bind(this, props.todo)} className={`button has-text-weight-bold ${props.todo.status === 0 ? "is-warning" : "is-primary"}`}>{props.todo.status === 0 ? "Undo" : "Done"}</button>
                {props.todo.status === 1 && <button onClick={props.deleteTodo.bind(this, props.todo)} className="button is-danger has-text-weight-bold">Delete</button>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`modal ${modal ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={() => setModal(false)}></div>
        <div className="modal-content">
            <form onSubmit={handleSubmit} className="field has-addons">
              <p className="control is-expanded">
                <input value={title} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} className="input" />
                <input value={description} type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} className="input" />
              </p>
              <p className="control">
                <button onClick={() => setModal(false)} className="button is-info has-text-weight-bold">
                  Close
                </button>
                <button className="button is-info has-text-weight-bold">
                  Save
                </button>
              </p>
            </form>
          </div>
          <button class="modal-close is-large" aria-label="close"></button>
        </div>
    </>
      )
}