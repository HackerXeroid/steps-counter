function StepButton({ children, isActive, onChangeStep }) {
  return (
    <button
      onClick={() => onChangeStep(children)}
      className={`w-10 h-10 bg-gray-400 text-white rounded-full ${
        isActive && "active"
      }`}
    >
      {children}
    </button>
  );
}

export default StepButton;
