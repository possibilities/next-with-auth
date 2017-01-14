import withLayout from '../components/withLayout'
import withSession from '../components/withSession'
import withEnvironmentVariables from '../components/withEnvironmentVariables'

const Other = () => {
  return <div>another page, just for demo purposes</div>
}

export default (
  withSession(
    withLayout(
      withEnvironmentVariables(
        Other,
        ['AUTHENTICATION_API_URL']
      )
    )
  )
)
