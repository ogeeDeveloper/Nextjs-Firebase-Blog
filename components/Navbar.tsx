import Link from "next/link"
import { useContext } from "react"
import { UserContext } from "../lib/context"


const Navbar = () => {
    const {user, username}: any = {} = useContext(UserContext)

  return (
    <nav className="navbar">
        <ul>
            <li>
            <Link href="/">
                <button className="btn-logo">Feed</button>
            </Link>
            </li>

            {/* If user is signed in and have a valid username */}
            {username && (
                <>
                <li>
                <Link href="/admin">
                    <button className="btn-blue">Write Post</button>
                </Link>
                </li>

                <li>
                <Link href={`/${username}`}>
                    <img src={user?.photoURL}/>
                </Link>
                </li>
                </>
            )}

            {!username && (
                <>
                <li>
                <Link href="/enter">
                    <button className="btn-blue">Sign Up</button>
                </Link>
                </li>
                </>
            )}
        </ul>
    </nav>
  )
}

export default Navbar