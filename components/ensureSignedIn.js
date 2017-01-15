const ensureSignedIn = Page => {
  return class EnsureSignedIn extends React.Component {
    static getInitialProps(context) {
      if (Page.getInitialProps) {
        return Page.getInitialProps(context)
      } else {
        return {}
      }
    }

    constructor(props) {
      super(props)

      if (process.browser && !props.session) {
        this.props.url.push('/sign-in?next=' + encodeURI(window.location))
      }
    }

    componentWillReceiveProps(nextProps) {
      if (process.browser && !nextProps.session) {
        this.props.url.push('/sign-in?next=' + encodeURI(window.location))
      }
    }

    render() {
      const isSignedIn = !!this.props.session

      if (isSignedIn) {
        return (
          <div>
            <Page {...this.props} />
          </div>
        )
      } else {
        return null
      }
    }
  }
}

export default ensureSignedIn
