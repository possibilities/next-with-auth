import wrapWithLayout from '../components/wrapWithLayout'
import injectSession from '../components/injectSession'
import injectEnvironmentVar from '../components/injectEnvironmentVar'

const Other = () => {
  return <div>another page, just for demo purposes</div>
}

const injectAuthApiUrl = injectEnvironmentVar('AUTHENTICATION_API_URL')

export default (
  injectSession(
    wrapWithLayout(
      injectAuthApiUrl(
        Other
      )
    )
  )
)
