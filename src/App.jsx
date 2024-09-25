import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
import Plant from "./Plant";
import PlantDetails from "./PlantDetails";
import Bookmark from "./Bookmark";
import QuizModal from "./QuizModal";
// import Home from "./Home";
import About from "./About";
function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  return (
    <Router>

      <Navbar setShowLogin={setShowLogin} setShowSignup={setShowSignup} setShowQuiz={setShowQuiz} />
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
      {showQuiz && <QuizModal onClose={() => setShowQuiz(false)} />}

      <div className="pt-16">
        <Routes>
        {/* <Route path="/Home" element={<Home />} /> */}
        <Route path="/About" element={<About />} />
          <Route path="/plants" element={<Plant />} />
          <Route
            path="/plants/:plantId"
            element={<PlantDetails bookmarkedItems={bookmarkedItems} setBookmarkedItems={setBookmarkedItems} />}
          />
          <Route path="/bookmark" element={<Bookmark bookmarkedItems={bookmarkedItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
