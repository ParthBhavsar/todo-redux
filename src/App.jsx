import { useState } from 'react';
import './App.css'
import Count from './components/Count';
import Counter from './components/Counter'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import "bootstrap/dist/css/bootstrap.min.css";
import Users from './components/Users';

function App() {
  const [page, setPage] = useState('users')
  return (
    <>
      <div className="container">
        {page === 'home' && (
          <>
          <Counter />
            <br/>
            <br/>
            <Count />
            <br/>
            <div className="row">
              <div className="col-10 mx-auto col-md-8 mt-4">
                <TodoInput />
                <TodoList />
              </div>
            </div>
          </>
        )}
        {page === 'users' && (
          <Users />
        )}
      </div>
      <button onClick={(() => {
        if (page === 'users') {
          setPage('home')
        } else {
          setPage('users')
        }
      })}>{page === 'users' ? '<- Go to Home' : 'Go to Users ->'}</button>
    </>
  )
}

export default App
