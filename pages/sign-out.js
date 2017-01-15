import injectEnvironmentVar from '../components/injectEnvironmentVar'
import injectSession from '../components/injectSession'
import withLayout from '../components/withLayout'
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
    withLayout(
      injectAuthApiUrl(
        SignOut
      )
    )
  )
)
