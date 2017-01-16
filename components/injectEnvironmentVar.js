import React from 'react'

const injectEnvironmentVar = varName => Page => {
  if (!process.browser && typeof (process.env[varName]) === undefined) {
    console.error(`${varName} environment variable is required`)
    process.exit(1)
  }

  return class InjectEnvironmentVar extends React.Component {
    static getInitialProps (context) {
      // Get the page's own initial props
      const pageProps = Page.getInitialProps ? Page.getInitialProps(context) : {}
      // Dig the specified environment variables up from the
      // appropriate sources
      const env = process.browser ? global.__next_env : process.env
      // Mix it in with the environment values
      return { ...pageProps, [varName]: env[varName] }
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
