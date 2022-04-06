import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const provider = new GoogleAuthProvider()
  const [user, setUser] = useState({})

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user
        setUser(user)
        console.log(user)
      })
      .catch(err => {
        console.log("Error...!", err)
      })
  }

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch((err) => {
        setUser({})
      })
  }
  return (
    <section>
      <div className="btn-container">
        {
          user.email ? <button className="btn" onClick={handleSingOut}>SingOut</button> :
          <button className="btn" onClick={handleGoogleLogin}>Login with Google</button>          
        }
      </div>
      <div>
        <h2>Name: {user.displayName}</h2>
        <h2>Email: {user.email}</h2>
        <img src={user.photoURL} alt="" />
      </div>
    </section>
  );
}

export default App;
