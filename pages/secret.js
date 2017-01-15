import SecurePage from '../components/SecurePage'

const Secret = () => <div>this secret can only be seen when you're signed in</div>

export default SecurePage(Secret)
