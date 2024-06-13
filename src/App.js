import React, { useState } from "react";
import StepButton from "./StepButton";
import MoveButton from "./MoveButton";

const steps = [
  "Create a budget 📊",
  "Save money 💰",
  "Invest your savings 📈",
  "Increase your income 💸",
  "Invest your new income 💼",
];

function App() {
  const [stepNum, setStepNum] = useState(1);

  return (
    <div className=" mt-10 w-[680px] bg-blue-50 p-8 mx-auto rounded-md">
      <div className="flex justify-between font-bold mb-16">
        {steps.map((step, i) => (
          <StepButton
            key={step}
            isActive={stepNum >= i + 1}
            onChangeStep={setStepNum}
          >
            {i + 1}
          </StepButton>
        ))}
      </div>

      <h2 className="text-3xl text-center font-bold mb-12">
        Step {stepNum}: {steps[stepNum - 1]}
      </h2>

      <div className="flex justify-between">
        <MoveButton
          currentStep={stepNum}
          onChangeStep={setStepNum}
          totalSteps={steps.length}
          buttonType="previous"
        >
          Previous
        </MoveButton>

        <MoveButton
          currentStep={stepNum}
          totalSteps={steps.length}
          onChangeStep={setStepNum}
          buttonType="next"
        >
          Next
        </MoveButton>
      </div>
    </div>
  );
}

export default App;
