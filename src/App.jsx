import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index.jsx";
import Leaderboard from "./pages/Leaderboard.jsx"; // Import the new Leaderboard page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/leaderboard" element={<Leaderboard />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
