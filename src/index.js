import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

function generateNewPassword () {
  return Math.random().toString(36).slice(-8)
}

function Example () {
  const [password, setPassword] = useState(generateNewPassword())

  useEffect(() => {
    console.log('初回から実行される 🌵')

    return () => {
      console.log('2回目移行🌵よりも先に実行される 🚓')
      alert(`your password was changed ${password}`)
    }
  })

  return (
    <div>
      <p>Your password is {password}</p>
      <button onClick={() => setPassword(generateNewPassword())}>
        Generate new password
      </button>
    </div>
  )
}

ReactDOM.render(
  <Example/>,
  document.getElementById('main')
)

