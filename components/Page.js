import injectEnvironmentVar from '../components/injectEnvironmentVar'
import injectSession from '../components/injectSession'
import wrapWithLayout from '../components/wrapWithLayout'
import compose from 'lodash.compose'

const injectAuthApiUrl = injectEnvironmentVar('AUTHENTICATION_API_URL')

// A pile of middleware that we use on every page
export default compose(injectSession, wrapWithLayout, injectAuthApiUrl)
