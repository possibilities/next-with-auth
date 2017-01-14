// Usage
// `export default withEnvironmentVariables(SignIn, ['AUTHENTICATION_API_URL'])`

const withEnvironmentVariables = (Page, variableNames) => {
  if (!process.browser) {
    variableNames.forEach(variableName => {
      if (typeof process.env[variableName] === undefined) {
        console.error(`${variableName} environment variable is required`)
        process.exit(1)
      }
    })
  }

  return class WithEnvironmentVariables extends React.Component {
    static getInitialProps(context) {
      // Dig the specified environment variables up from the
      // appropriate sources
      const env = process.browser ? global.__next_env : process.env
      const envValues = {}
      variableNames.forEach(name => envValues[name] = env[name])
      // Get the page's own initial props
      const pageProps = Page.getInitialProps ? Page.getInitialProps(context) : {}
      // Mix it in with the environment values
      return { ...pageProps, ...envValues }
    }

    constructor(props) {
      super(props)
      // If we're on the client we want to copy all environment variables
      // to the global namespace so other pages will be able to grab them
      // when fetching their initial props.
      if (process.browser) {
        global.__next_env = global.__next_env || {}
        variableNames.forEach(name => {
          global.__next_env[name] = props[name]
        })
      }
    }

    render() {
      return (
        <Page {...this.props} />
      )
    }
  }
}

export default withEnvironmentVariables
