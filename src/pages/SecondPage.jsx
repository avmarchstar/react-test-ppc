import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles.css"; // Импорт стилей

const SecondPage = () => {
  const location = useLocation();
  const email = location.state?.email || "No email provided";
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    text: "",
    checkboxes: [],
    radio: "",
    selectedOption: "",
  });
  const navigate = useNavigate();

  // Функция обработки чекбоксов
  const handleCheckboxChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      checkboxes: prev.checkboxes.includes(value)
        ? prev.checkboxes.filter((item) => item !== value)
        : [...prev.checkboxes, value],
    }));
  };

  // Функция отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/third", { state: { formData } });
  };

  return (
    <div className="page-container">
      <h1>Thank you. You were registered correctly</h1>
      <p id="user-email">Email: {email}</p>

      {/* Кнопка счетчика */}
      <button id="counter-btn" onClick={() => setCount(count + 1)}>
        Counter
      </button>
      <p id="counter-value">Count: {count}</p>

      {/* Всплывающее окно alert */}
      <button id="popup-btn" onClick={() => window.alert("Pop up event")}>
        Pop-Up
      </button>

      {/* Форма "Choose something" */}
      <form id="choose-form" onSubmit={handleSubmit}>
        <h2>Choose something</h2>
        <input
          id="choose-text"
          type="text"
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
        />

        {/* Перемещенный выпадающий список */}
        <select
          id="choose-select"
          onChange={(e) =>
            setFormData({ ...formData, selectedOption: e.target.value })
          }
        >
          <option value="">Select an option</option>
          <option value="Option1">Option1</option>
          <option value="Option2">Option2</option>
          <option value="Option3">Option3</option>
        </select>

        {/* Чекбоксы */}
        <div id="choose-checkboxes">
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("check1")}
            />{" "}
            check1
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("check2")}
            />{" "}
            check2
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("check3")}
            />{" "}
            check3
          </label>
        </div>

        {/* Радио кнопки */}
        <div id="choose-radios">
          <label>
            <input
              type="radio"
              name="radio"
              value="radio1"
              onChange={(e) =>
                setFormData({ ...formData, radio: e.target.value })
              }
            />{" "}
            radio1
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value="radio2"
              onChange={(e) =>
                setFormData({ ...formData, radio: e.target.value })
              }
            />{" "}
            radio2
          </label>
        </div>

        <button id="choose-submit" type="submit">
          GO
        </button>
      </form>
    </div>
  );
};

export default SecondPage;
