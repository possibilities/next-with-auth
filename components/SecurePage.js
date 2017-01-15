import Page from './Page'
import ensureSignedIn from './ensureSignedIn'
import compose from 'lodash.compose'

export default compose(Page, ensureSignedIn)
