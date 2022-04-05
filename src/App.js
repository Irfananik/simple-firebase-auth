import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const auth = getAuth(app)

function App() {
  const provider = new GoogleAuthProvider()

  const handleGoogleLogin = () => {
    signInWithPopup(auth,provider)
    .then(result => {
      const user = result.user
      console.log(user)
    })
    .catch(err => {
      console.log("Error...!",err)
    })
  }
  return (
    <div>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
}

export default App;
