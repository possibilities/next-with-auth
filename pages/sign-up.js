import SignInOrSignUp from '../components/SignInOrSignUp'

import injectEnvironmentVar from '../components/injectEnvironmentVar'
import injectSession from '../components/injectSession'
import wrapWithLayout from '../components/wrapWithLayout'

const SignUp = props => <SignInOrSignUp mode="signup" {...props} />

const injectAuthApiUrl = injectEnvironmentVar('AUTHENTICATION_API_URL')

export default (
  injectSession(
    wrapWithLayout(
      injectAuthApiUrl(
        SignUp
      )
    )
  )
)
