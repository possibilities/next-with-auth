import Link from 'next/link'

export default ({ isSignedIn, username }) => {
  return (
    <div>
      <ul>
        <style jsx>{`
          ul {
            padding: 0 0 20px;
            margin: 0;
          }
          li {
            display: inline;
            list-style: none;
          }
          li:after {
            content: " | ";
          }
          li:last-child:after {
            content: "";
          }
        `}</style>

        <li><Link href='/'>home</Link></li>
        <li><Link href='/other'>other</Link></li>
        <li><Link href='/secret'>secret</Link></li>
      </ul>

      <ul>
        <style jsx>{`
          ul {
            padding: 0;
            margin: 0;
            position: absolute;
            right: 0;
            top: 0;
          }
          li {
            display: inline;
            list-style: none;
          }
          li:after {
            content: " | ";
          }
          li:last-child:after {
            content: "";
          }
          li span {
            color: #aaa;
          }
        `}</style>

        {!isSignedIn && <li><Link href='/sign-in'>sign in</Link></li>}
        {!isSignedIn && <li><Link href='/sign-up'>sign up</Link></li>}
        {isSignedIn && (
          <li>
            <span>{username}</span> <Link href='/sign-out'>sign out</Link>
          </li>
        )}
      </ul>
    </div>
  )
}
