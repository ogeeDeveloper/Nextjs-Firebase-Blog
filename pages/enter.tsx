import { googleAuthProvider, auth } from "../lib/firebase"
import { signInWithPopup,signOut } from "firebase/auth"

const Enter = () => {
  const user = null
  const username = null
  // USE CASES
  // 1 Show the User signout button if user is signed in
  // 2  Show <UsernameForm/> if user is signed in but missing a username
  // 3 Show the <SignOutButton/> if the user is signed in and have set a username
  return (
    <main>
      {user ?
        !username ? <UsernameForm /> : <SignOut/>
        :
        <SignInButton />
      }
    </main>
  )
}

// Sign in with Google Button
function SignInButton (){
  const signInWithGoogle = async()=>{
    await signInWithPopup(auth, googleAuthProvider)
  }
  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={'/google.png'} /> Sign in with Google
    </button>
  )
}

// Sign out Button
function SignOut (){
  return <button onClick={()=>signOut(auth)}>Sign Out</button>
}

//Form where a user can choose a user name once the sign in with google OAuth
function UsernameForm (){}

export default Enter