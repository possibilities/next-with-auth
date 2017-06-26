import React from 'react'

/*
 * Dredges up a `session` object from cookie or localStorage and, if present,
 * injects it as a prop. Also keeps track of the current session in
 * component state so that multiple tabs open in the same browser can react
 * to sign ins/outs.
 */

// Pull the session out of local storage and parse it muffling any errors
const getSessionFromLocalStorage = () => {
  try {
    return JSON.parse(window.localStorage.getItem('session'))
  } catch (error) {
    console.error(error)
  }
}

const injectSession = Page => {
  return class InjectSession extends React.Component {
    constructor (props) {
      super(props)
      // As the session changes we need a spot to store in a way that updates
      // children components
      this.state = {}
    }

    static async getInitialProps (context) {
      // Get the page's own initial props
      const initialProps = Page.getInitialProps ? await Page.getInitialProps(context) : {}

      // Dig the session out of localstorage (on client) or the request (on
      // server)
      const session = process.browser
        ? getSessionFromLocalStorage()
        : context.req.session

      // Inject any initial props and session
      return { ...initialProps, session }
    }

    render () {
      // Pass on whatever props exist and state
      return <Page {...this.props} {...this.state} />
    }

    componentWillMount () {
      // Use component state to track the session
      if (process.browser) {
        window.addEventListener('storage', this.handleStorageChange)
      }
    }

    componentWillUnmount () {
      // Stop tracking session
      if (process.browser) {
        window.removeEventListener('storage', this.handleStorageChange)
      }
    }

    handleStorageChange = event => {
      // Keep component state up to date with current session as it changes.
      // This is so other tabs open in the same browser can respond to session
      // changes.
      if (event.key === 'session') {
        if (event.newValue) {
          this.setState({ session: JSON.parse(event.newValue) })
        } else {
          this.setState({ session: null })
        }
      }
    }
  }
}

export default injectSession
