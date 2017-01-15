import SignInOrSignUp from '../components/SignInOrSignUp'

import injectEnvironmentVar from '../components/injectEnvironmentVar'
import injectSession from '../components/injectSession'
import wrapWithLayout from '../components/wrapWithLayout'

const SignIn = props => <SignInOrSignUp mode="signin" {...props} />

const injectAuthApiUrl = injectEnvironmentVar('AUTHENTICATION_API_URL')

export default (
  injectSession(
    wrapWithLayout(
      injectAuthApiUrl(
        SignIn
      )
    )
  )
)
