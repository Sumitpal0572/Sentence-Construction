import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Quiz2 from "./Pages/Quiz2";
import Quiz3 from "./Pages/Quiz3";
import Quiz4 from "./Pages/Quiz4";
import Quiz5 from "./Pages/Quiz5";
import Result from "./Pages/Result"; 



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz2" element={<Quiz2 />} />
        <Route path="/quiz3" element={<Quiz3 />} />
        <Route path="/quiz4" element={<Quiz4 />} />
        <Route path="/quiz5" element={<Quiz5 />} />
        <Route path="/result" element={<Result />} />

      </Routes>
    </Router>
  );
}

export default App;