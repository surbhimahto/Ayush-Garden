import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
import Plant from "./Plant"; // Import Plant component

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <Router>
      <Navbar setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}

      <div className="pt-16">
        <Routes>
          <Route path="/plants" element={<Plant />} />
          {/* Add other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;