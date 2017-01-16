import React from 'react'
import Link from 'next/prefetch'
import Page from '../components/Page'

class Home extends React.Component {
  render () {
    const { session } = this.props

    if (session) {
      const { username } = session
      return (
        <div>welcome home, {username}!</div>
      )
    } else {
      return (
        <div>
          <Link href='/sign-in'>sign in</Link> to continue!
        </div>
      )
    }
  }
}

export default Page(Home)
