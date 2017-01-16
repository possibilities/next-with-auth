import Page from './Page'
import ensureSignedIn from './ensureSignedIn'
import compose from '../modules/compose'

// Use the typical `Page` middleware and redirect to `/sign-in` when there's
// no session.
export default compose(Page, ensureSignedIn)
