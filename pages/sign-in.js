import SignInOrSignUp from '../components/SignInOrSignUp'
import Page from '../components/Page'

const SignIn = props => <SignInOrSignUp mode='signin' {...props} />

export default Page(SignIn)
