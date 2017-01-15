import wrapWithLayout from '../components/wrapWithLayout'
import injectEnvironmentVar from '../components/injectEnvironmentVar'
import ensureSignedIn from '../components/ensureSignedIn'
import injectSession from '../components/injectSession'

const Secret = () => {
  return <div>this secret can only be seen when you're signed in</div>
}

const injectAuthApiUrl = injectEnvironmentVar('AUTHENTICATION_API_URL')

export default (
  injectSession(
    wrapWithLayout(
      injectAuthApiUrl(
        ensureSignedIn(
          Secret
        )
      )
    )
  )
)
