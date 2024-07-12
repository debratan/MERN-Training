import "./App.css";
import AuthProvider from "./component/AuthCOntext";
import Userprofile from "./component/userprofile";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Userprofile />
      </div>
    </AuthProvider>
  );
}

export default App;
