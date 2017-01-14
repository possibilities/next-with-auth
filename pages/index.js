import Link from 'next/prefetch'
import withEnvironmentVariables from '../components/withEnvironmentVariables'
import withSession from '../components/withSession'
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

export default (
  withSession(
    withLayout(
      withEnvironmentVariables(
        Home,
        ['AUTHENTICATION_API_URL']
      )
    )
  )
)
