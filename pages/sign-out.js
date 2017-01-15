import injectEnvironmentVar from '../components/injectEnvironmentVar'
import withSession from '../components/withSession'
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
  withSession(
    withLayout(
      injectAuthApiUrl(
        SignOut
      )
    )
  )
)
