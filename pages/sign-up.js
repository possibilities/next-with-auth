import SignInOrSignUp from '../components/SignInOrSignUp'

import withEnvironmentVariables from '../components/withEnvironmentVariables'
import withSession from '../components/withSession'
import withLayout from '../components/withLayout'

const SignUp = props => <SignInOrSignUp mode="signup" {...props} />

export default (
  withSession(
    withLayout(
      withEnvironmentVariables(
        SignUp,
        ['AUTHENTICATION_API_URL']
      )
    )
  )
)
