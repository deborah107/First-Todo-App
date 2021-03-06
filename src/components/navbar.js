import React, { useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo as actionAddTodo } from '../store/actions' 


export default function Navbar() {
  const todos = useSelector(state => state)
  const [menu, setMenu] = useState(false)
  const [value, setValue] = useState("")
  const dispatch = useDispatch()

  const addTodo = (e) => {
    e.preventDefault()
    dispatch(actionAddTodo({
      title: value,
      status: 1,
    }))
    setValue("")
  }

  return (
    <div className="navbar has-shadow">
     <div className="navbar-brand">
        <div className="navbar-item">
          <p className="title">My Todo</p>
        </div>

        <a role="button" onClick={() => setMenu(!menu)} className={`navbar-burger burger ${menu ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${menu ? "is-active" : ""}`}>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field has-addons">
            <form onSubmit={addTodo} className="field has-addons">
              <p className="control is-expanded">
                <input value={value} type="text" onChange={(e) => setValue(e.target.value)} className="input" />
              </p>
              <p className="control">
                <button className="button is-info has-text-weight-bold">
                  Add Todo
                </button>
              </p>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}