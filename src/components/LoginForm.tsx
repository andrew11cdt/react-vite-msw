import React, { useState, useCallback } from 'react'
type User = {
  firstName: string
  lastName: string
  id: string
  [key: string]: string
}
export const LoginForm = () => {
  // Store the username so we can reference it in a submit handler
  const [username, setUsername] = useState('')

  // Create a state for the user data we are going to receive
  const [userData, setUserData] = useState<User | null>(null)
  console.log(userData);


  const handleUsernameChange = useCallback((event: any) => {
    setUsername(event.target.value)
  }, [])

  // Handle a submit event of the form
  const handleFormSubmit = useCallback(
    (event: any) => {
      // Prevent the default behavior, as we don't want
      // for our page to reload upon submit.
      event.preventDefault()

      // Perform a POST /login request and send the username
      fetch('/login', {
        method: 'POST',
        body: JSON.stringify({
          username,
        }),
      })
        .then((res) => {
          return res.json()
        })
        // Update the state with the received response
        .then(setUserData)
      fetch('/user', {
        method: 'GET',
      })
        .then((res) => res.json())
      // Update the state with the received response
      // .then(setUserData)
    },
    [username]
  )

  if (userData) {
    return (
      <div>
        <h2>User Data</h2>
        <table style={{ textAlign: 'left' }}>
          <tr>
            <th style={{ width: '60px' }}>Key</th>
            <th>Value</th>
          </tr>
          {Object.keys(userData).map(key => (
            <tr>
              <th style={{ width: '60px' }}>{key}</th>
              <td data-testid={key}>{userData[key]}</td>
            </tr>
          ))}
        </table>
      </div>
    )
  }

  return (
    <form className="loginform" onSubmit={handleFormSubmit}>
      <div style={{ textAlign: 'left' }}>
        <h2>Let's try calling an API mock:</h2>
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
