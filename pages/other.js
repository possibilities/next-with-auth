import withLayout from '../components/withLayout'
import withSession from '../components/withSession'
import injectEnvironmentVar from '../components/injectEnvironmentVar'

const Other = () => {
  return <div>another page, just for demo purposes</div>
}

const injectAuthApiUrl = injectEnvironmentVar('AUTHENTICATION_API_URL')

export default (
  withSession(
    withLayout(
      injectAuthApiUrl(
        Other
      )
    )
  )
)
