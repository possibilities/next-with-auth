import React from 'react'
import request from 'axios'
import Cookie from 'js-cookie'
import debounce from 'lodash.debounce'

const BUTTON_LABEL = {
  signin: 'sign in',
  signup: 'sign up'
}

const ENDPOINT_PATH = {
  signin: 'sign-in',
  signup: 'sign-up'
}

const isProduction = process.env.NODE_ENV === 'production'

if (!process.browser && !process.env.AUTHENTICATION_API_URL) {
  console.error('AUTHENTICATION_API_URL environment variable is required')
  process.exit(1)
}

export default class SignInOrSignUp extends React.Component {
  state = { errorMessage: null }

  render () {
    const { mode } = this.props
    const { errorMessage } = this.state

    return (
      <div>
        <style jsx>{`
          input {
            margin-bottom: 5px;
            border: 1px solid #ccc;
          }
          .errorMessage {
            color: red;
            font-size: .8em;
            padding-bottom: 10px;
          }
          button {
            margin-top: 5px;
          }
        `}</style>

        {errorMessage && (
          <div className='errorMessage'>{errorMessage}</div>
        )}

        <div>
          <input
            ref='username'
            placeholder='username'
            onKeyUp={this.handleUsernameKeyUp} />
        </div>
        <div>
          <input
            ref='password'
            type='password'
            placeholder='password'
            onKeyUp={this.handlePasswordKeyUp} />
        </div>
        <div>
          <button onClick={this.handleSubmit}>{BUTTON_LABEL[mode]}!</button>
        </div>
      </div>
    )
  }

  checkUsernameAvailable = async username => {
    const apiUrl = `${this.props.AUTHENTICATION_API_URL}/check-username/${username}`
    const response = await request.get(apiUrl)

    if (response.data.username === this.refs.username.value.trim()) {
      this.setState({ errorMessage: `username '${username}' is already taken` })
    }
  }

  checkUsernameAvailableDebounced =
    debounce(this.checkUsernameAvailable, 500)

  handleUsernameKeyUp = event => {
    this.setState({ errorMessage: null })
    if (event.keyCode === 13) { // Enter
      return this.handleSubmit()
    }
    if (this.props.mode === 'signup') {
      this.checkUsernameAvailableDebounced(this.refs.username.value.trim())
    }
  }

  handlePasswordKeyUp = event => {
    this.setState({ errorMessage: null })
    if (event.keyCode === 13) { // Enter
      return this.handleSubmit()
    }
  }

  handleSubmit = async () => {
    this.setState({ errorMessage: null })

    const { mode } = this.props

    const username = this.refs.username.value.trim()
    const password = this.refs.password.value.trim()

    let response
    try {
      const apiUrl = `${this.props.AUTHENTICATION_API_URL}/${ENDPOINT_PATH[mode]}`
      response = await request.post(apiUrl, { username, password })
    } catch (error) {
      this.setState({ errorMessage: error.response.data.message })
      console.error(error)
    }

    if (response) {
      const session = response.data

      // Store the token for the benefit of client and server
      window.localStorage.setItem('session', JSON.stringify(session))
      Cookie.set('token', session.token, { secure: isProduction })

      // Redirect to the next URL or home
      const nextUrl = this.props.url.query.next
      this.props.url.push(nextUrl || '/')
    }
  }
}
