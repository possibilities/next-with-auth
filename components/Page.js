import injectEnvironmentVar from './injectEnvironmentVar'
import injectSession from './injectSession'
import wrapWithLayout from './wrapWithLayout'
import compose from '../modules/compose'

const injectAuthApiUrl = injectEnvironmentVar('AUTHENTICATION_API_URL')

// A pile of middleware that we use on every page
export default compose(injectAuthApiUrl, injectSession, wrapWithLayout)
