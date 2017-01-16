const micro = require('micro')
const next = require('next')
const extractSessionFromCookie = require('./modules/extractSessionFromCookie')

/*
 * A custom next.js server using micro. This is primarily so we can add some
 * middleware; we don't do anything special in terms of routing.
 */

const isProduction = process.env.NODE_ENV === 'production'
const port = 3000

// Let `next` do everything but use this opportunity to parse the cookie,
// decode the JWT and cache it at `req.session`
const main = async () => {
  const app = next({ dev: !isProduction })
  const nextRequestHandler = app.getRequestHandler()

  await app.prepare()

  micro((req, res) => {
    // Extract the session and cache it
    req.session = extractSessionFromCookie(req)

    // Let next handle the request
    return nextRequestHandler(req, res)
  }).listen(port)

  console.info(`listening on port ${port}...`)
}

main()
