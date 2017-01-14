import SignInOrSignUp from '../components/SignInOrSignUp'

import withEnvironmentVariables from '../components/withEnvironmentVariables'
import withSession from '../components/withSession'
import withLayout from '../components/withLayout'

const SignIn = props => <SignInOrSignUp mode="signin" {...props} />

export default (
  withSession(
    withLayout(
      withEnvironmentVariables(
        SignIn,
        ['AUTHENTICATION_API_URL']
      )
    )
  )
)
