import Page from '../components/Page'
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

export default Page(SignOut)
