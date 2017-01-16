import React from 'react'

const injectSession = Page => {
  return class InjectSession extends React.Component {
    constructor (props) {
      super(props)
      this.state = {}
    }

    static getInitialProps (context) {
      const pageProps = Page.getInitialProps ? Page.getInitialProps(context) : {}

      let session
      if (process.browser && window.localStorage.getItem('session')) {
        session = window.localStorage.getItem('session')
        if (session) {
          session = JSON.parse(session)
        }
      } else if (context.req) {
        session = context.req.session
      }

      return { ...pageProps, session }
    }

    render () {
      return <Page {...this.props} {...this.state} />
    }

    componentWillMount () {
      if (process.browser) {
        window.addEventListener('storage', this.handleStorageChange)
      }
    }

    componentWillUnmount () {
      if (process.browser) {
        window.removeEventListener('storage', this.handleStorageChange)
      }
    }

    handleStorageChange = event => {
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
