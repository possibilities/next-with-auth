import React from 'react'
import Menu from './Menu'

// Wraps a global layout around a page

const wrapWithLayout = Page => {
  return class WrapWithLayout extends React.Component {
    static getInitialProps (context) {
      return Page.getInitialProps
        ? Page.getInitialProps(context)
        : {}
    }

    render () {
      const { username } = this.props.session || {}

      return (
        <div className='mooof'>
          <style jsx>{`
            .layout {
              font-family: Arial, Helvetica, sans-serif;
              position: relative;
              max-width: 700px;
              margin: 0 auto;
            }
          `}</style>

          <div className='layout'>
            <Menu username={username} />
            <Page {...this.props} />
          </div>
        </div>
      )
    }
  }
}

export default wrapWithLayout
