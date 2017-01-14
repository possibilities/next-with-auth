import withLayout from '../components/withLayout'
import withEnvironmentVariables from '../components/withEnvironmentVariables'
import withProtection from '../components/withProtection'
import withSession from '../components/withSession'

const Secret = () => {
  return <div>this secret can only be seen when you're signed in</div>
}

export default (
  withSession(
    withProtection(
      withLayout(
        withEnvironmentVariables(
          Secret,
          ['AUTHENTICATION_API_URL']
        )
      )
    )
  )
)
