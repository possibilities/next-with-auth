import injectEnvironmentVar from '../components/injectEnvironmentVar'
import injectSession from '../components/injectSession'
import wrapWithLayout from '../components/wrapWithLayout'
import Cookie from 'js-cookie'

class SignOut extends React.Component {
  componentDidMount() {
    if (process.browser) {
      window.localStorage.removeItem('session')
      Cookie.remove('token')
    }
    this.props.url.push('/')
  }

  render() {
    return (
      <div>signing out...</div>
    )
  }
}

const injectAuthApiUrl = injectEnvironmentVar('AUTHENTICATION_API_URL')

export default (
  injectSession(
    wrapWithLayout(
      injectAuthApiUrl(
        SignOut
      )
    )
  )
)
