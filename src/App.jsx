import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./component/SignIn";
import HomePage from "./page/HomePage";
import SignUp from "./component/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
