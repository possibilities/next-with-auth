import React from 'react'

/*
 * Causes page component to be redirected to `/sign-in` if there is no
 * `this.props.session` available. Tacks on `?next=` query param with the
 * `window.location` which the sign in page can redirect user back to on
 * successful authentication.
 */

const ensureSignedIn = Page => {
  return class EnsureSignedIn extends React.Component {
    static getInitialProps (context) {
      // If the page has a prop fetcher invoke it
      return Page.getInitialProps ? Page.getInitialProps(context) : {}
    }

    constructor (props) {
      super(props)

      // On the client redirect right away to the sign in page if there's no
      // session
      if (process.browser && !props.session) {
        this.props.url.push('/sign-in?next=' + encodeURI(window.location))
      }
    }

    componentWillReceiveProps (nextProps) {
      // On the client redirect to the sign in page if the session gets signed
      // out in another tab
      if (process.browser && !nextProps.session) {
        this.props.url.push('/sign-in?next=' + encodeURI(window.location))
      }
    }

    render () {
      if (this.props.session) {
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
