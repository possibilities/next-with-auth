import Link from 'next/prefetch'
import injectEnvironmentVar from '../components/injectEnvironmentVar'
import injectSession from '../components/injectSession'
import withLayout from '../components/withLayout'

class Home extends React.Component {
  render() {
    const { session } = this.props

    if (session) {
      const { username } = session
      return (
        <div>welcome home, {username}!</div>
      )
    } else {
      return (
        <div>
          <Link href="/sign-in">sign in</Link> to continue!
        </div>
      )
    }
  }
}

const injectAuthApiUrl = injectEnvironmentVar('AUTHENTICATION_API_URL')

export default (
  injectSession(
    withLayout(
      injectAuthApiUrl(
        Home
      )
    )
  )
)
