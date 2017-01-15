const injectSession = Page => {
  return class InjectSession extends React.Component {
    static getInitialProps(context) {
      const pageProps = Page.getInitialProps ? Page.getInitialProps(context) : {}

      let session
      if (process.browser && localStorage.getItem('session')) {
        session = localStorage.getItem('session')
        if (session) {
          session = JSON.parse(session)
        }
      } else if (context.req) {
        session = context.req.session
      }

      return { ...pageProps, session }
    }

    render() {
      return <Page {...this.props} />
    }
  }
}

export default injectSession
