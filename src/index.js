import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function generateNewPassword () {
  return Math.random().toString(36).slice(-8)
}

function Example () {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)
  const [password, setPassword] = useState(generateNewPassword())

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
      <div>
        <p>Your password is {password}</p>
        <button onClick={() => setPassword(generateNewPassword())}>
          Generate new password
        </button>
      </div>
    </>
  )
}

ReactDOM.render(
  <Example/>,
  document.getElementById('main')
)

