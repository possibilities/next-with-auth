import Page from './Page'
import ensureSignedIn from './ensureSignedIn'

export default compose(ensureSignedIn, Page)
