import React from 'react'

/*
 * Enabled making environment variables available to pages loaded on the
 * server or client. This won't work at all unless every page in the app uses
 * this HoC because it relies on the initial server-rendered page to pass it
 * along to client-rendered pages. E.g.
 *
 * ```
 * const injectApiUrl = injectEnvironmentVar('API_URL')
 * const Home = () => <div>Welcome home!</div>
 * export default injectApiUrl(Home)
 * ```
 */

const injectEnvironmentVar = varName => Page => {
  // Blow the whole thing up if the env var isn't present
  if (!process.browser && typeof (process.env[varName]) === undefined) {
    console.error(`${varName} environment variable is required`)
    process.exit(1)
  }

  return class InjectEnvironmentVar extends React.Component {
    static getInitialProps (context) {
      // Get the page's own initial props
      const initialProps = Page.getInitialProps ? Page.getInitialProps(context) : {}
      // Dig the specified environment variables up from the
      // appropriate sources
      const env = process.browser ? global.__next_env : process.env
      // Mix it in with the environment values
      return { ...initialProps, [varName]: env[varName] }
    }

    constructor (props) {
      super(props)
      // If we're on the client we want to copy all environment variables
      // to the global namespace so other pages will be able to grab them
      // when fetching their initial props.
      if (process.browser) {
        global.__next_env = global.__next_env || {}
        global.__next_env[varName] = props[varName]
      }
    }

    render () {
      return (
        <Page {...this.props} />
      )
    }
  }
}

export default injectEnvironmentVar
