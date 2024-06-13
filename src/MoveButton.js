function MoveButton({
  children,
  totalSteps,
  currentStep,
  onChangeStep,
  buttonType,
}) {
  const clickHandler = (e) => {
    e.preventDefault();

    // eslint-disable-next-line
    switch (buttonType) {
      case "previous":
        if (1 < currentStep) onChangeStep((step) => step - 1);
        break;
      case "next":
        if (currentStep < totalSteps) onChangeStep((step) => step + 1);
        break;
    }
  };

  return (
    <button
      onClick={clickHandler}
      className="py-2 px-4 bg-purple-500 text-white rounded-full font-bold"
    >
      {children}
    </button>
  );
}

export default MoveButton;
