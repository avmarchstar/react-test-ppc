import { useLocation, useNavigate } from "react-router-dom";
import "../styles.css"; // Импорт стилей

const ThirdPage = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1 id="third-title">You finally did this</h1>
      <p id="third-text">Text: {formData.text}</p>
      <p id="third-checkboxes">
        Selected checkboxes: {formData.checkboxes.join(", ")}
      </p>
      <p id="third-radio">Selected radio: {formData.radio}</p>
      <p id="third-option">Selected option: {formData.selectedOption}</p>

      <div className="navigation-buttons">
        <button id="main-page-btn" onClick={() => navigate("/")}>
          Main Page
        </button>
        <button id="second-page-btn" onClick={() => navigate("/second")}>
          Second Page
        </button>
      </div>
    </div>
  );
};

export default ThirdPage;
