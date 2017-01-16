import SignInOrSignUp from '../components/SignInOrSignUp'
import Page from '../components/Page'

const SignUp = props => <SignInOrSignUp mode='signup' {...props} />

export default Page(SignUp)
