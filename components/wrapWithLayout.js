import React from 'react'
import Menu from './Menu'

const wrapWithLayout = Page => {
  return class WrapWithLayout extends React.Component {
    static getInitialProps (context) {
      if (Page.getInitialProps) {
        return Page.getInitialProps(context)
      } else {
        return {}
      }
    }

    render () {
      const isSignedIn = !!this.props.session
      const username = isSignedIn && this.props.session.username

      return (
        <div className='mooof'>
          <style jsx>{`
            .layout {
              font-family: Arial, Helvetica, sans-serif;
              position: relative;
              width: 900px;
              margin: 0 auto;
            }
          `}</style>

          <div className='layout'>
            <Menu isSignedIn={isSignedIn} username={username} />
            <Page {...this.props} />
          </div>
        </div>
      )
    }
  }
}

export default wrapWithLayout
