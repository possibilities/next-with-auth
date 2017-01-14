import withEnvironmentVariables from '../components/withEnvironmentVariables'
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

export default (
  withLayout(
    withSession(
      withEnvironmentVariables(
        SignOut,
        ['AUTHENTICATION_API_URL']
      )
    )
  )
)
