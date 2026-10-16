
function CalculatorButton({ label, onClick, type = '' }) {
  return (
    <button className={`calc-button ${type}`} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

export default CalculatorButton;

