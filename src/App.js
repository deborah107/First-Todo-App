import React from 'react';
import Navbar from './components/navbar';
import TodoList from './components/todolist';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar/>
        <TodoList/>
      </Provider>
    </div>
  );
}

export default App;
