import SignInOrSignUp from '../components/SignInOrSignUp'

import injectEnvironmentVar from '../components/injectEnvironmentVar'
import withSession from '../components/withSession'
import withLayout from '../components/withLayout'

const SignIn = props => <SignInOrSignUp mode="signin" {...props} />

const injectAuthApiUrl = injectEnvironmentVar('AUTHENTICATION_API_URL')

export default (
  withSession(
    withLayout(
      injectAuthApiUrl(
        SignIn
      )
    )
  )
)
