import './App.css';
import app from './firebase.init';
import { getAuth } from "firebase/auth"
import Login from './Components/Login/Login';

const auth = getAuth(app)

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
