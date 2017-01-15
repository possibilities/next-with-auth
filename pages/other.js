import withLayout from '../components/withLayout'
import injectSession from '../components/injectSession'
import injectEnvironmentVar from '../components/injectEnvironmentVar'

const Other = () => {
  return <div>another page, just for demo purposes</div>
}

const injectAuthApiUrl = injectEnvironmentVar('AUTHENTICATION_API_URL')

export default (
  injectSession(
    withLayout(
      injectAuthApiUrl(
        Other
      )
    )
  )
)
