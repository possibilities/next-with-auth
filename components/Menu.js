import Link from 'next/prefetch'

export default ({ username }) => {
  return (
    <div>
      <style jsx>{`
        ul {
          padding: 0 0 20px;
          margin: 0;
        }
        ul.pull-right {
          padding: 0;
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
      `}</style>

      <ul>
        <li><Link href='/'>home</Link></li>
        <li><Link href='/other'>other</Link></li>
        <li><Link href='/secret'>secret</Link></li>
      </ul>

      <ul className='pull-right'>
        {!username && <li><Link href='/sign-in'>sign in</Link></li>}
        {!username && <li><Link href='/sign-up'>sign up</Link></li>}
        {username && (
          <li>
            <span>{username}</span> <Link href='/sign-out'>sign out</Link>
          </li>
        )}
      </ul>
    </div>
  )
}
