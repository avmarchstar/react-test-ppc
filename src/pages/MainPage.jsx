import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"; // Импорт стилей

const MainPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email");
    } else {
      setError("");
      navigate("/second", { state: { email } });
    }
  };

  return (
    <div className="page-container">
      <h1 id="main-title">Main Page</h1>
      <form id="main-form" onSubmit={handleSubmit}>
        <label htmlFor="email-input">Enter your email:</label>
        <input
          id="email-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <button id="submit-btn" type="submit">
          Submit
        </button>
        {error && <p id="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default MainPage;
