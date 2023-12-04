import "./CalcButton.css";

export default function CalcButton({ number, check }) {
  function handleClick() {
    console.log("in Button you clicked", number);
    check(number);
  }
  return (
    <button onClick={handleClick} className="btn" value={number}>
      {number}
    </button>
  );
}
