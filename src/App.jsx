import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./component/SignIn";

import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
