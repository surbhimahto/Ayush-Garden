import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Plant from "./components/Plant";
import PlantDetails from "./components/PlantDetails";
import Bookmark from "./components/Bookmark";
import QuizModal from "./components/QuizModal";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  return (
    <Router>
      <Navbar 
        setShowLogin={setShowLogin} 
        setShowSignup={setShowSignup} 
        setShowQuiz={setShowQuiz} 
      />
      
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
      {showQuiz && <QuizModal onClose={() => setShowQuiz(false)} />}

      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/plants" element={<Plant />} />
          <Route path="/plants/:plantId" element={<PlantDetails bookmarkedItems={bookmarkedItems} setBookmarkedItems={setBookmarkedItems} />} />
          <Route path="/bookmark" element={<Bookmark bookmarkedItems={bookmarkedItems} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;