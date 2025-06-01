import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles.css";
import MainPage from "./pages/MainPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
      </Routes>
    </Router>
  );
};

export default App;
