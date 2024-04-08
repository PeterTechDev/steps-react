import { useState } from "react";

const messages = ["Learn to test ⚛️", "Start Testing 💼", "Do it again 🧪"];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePreviousButton() {
    if (step > 1) setStep((prevStep) => prevStep - 1);
  }

  function handleNextButton() {
    if (step < 3) setStep((prevStep) => prevStep + 1);
  }

  return (
    <div>
      <button
        className="close"
        onClick={() => setIsOpen((currentState) => !currentState)}
      >
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePreviousButton}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNextButton}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
