import SignInOrSignUp from '../components/SignInOrSignUp'

import injectEnvironmentVar from '../components/injectEnvironmentVar'
import withSession from '../components/withSession'
import withLayout from '../components/withLayout'

const SignUp = props => <SignInOrSignUp mode="signup" {...props} />

const injectAuthApiUrl = injectEnvironmentVar('AUTHENTICATION_API_URL')

export default (
  withSession(
    withLayout(
      injectAuthApiUrl(
        SignUp
      )
    )
  )
)
