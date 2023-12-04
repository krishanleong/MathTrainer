import "bootstrap/dist/css/bootstrap.min.css";
import "./CalcButton.css";

export default function CalcButton({ number, check }) {
  function handleClick() {
    console.log("in Button you clicked", number);
    check(number);
  }
  return (
    <div className="d-inline col-4 ">
      <button
        onClick={handleClick}
        className="btn btn-large btn-success col-3 calcButton"
        value={number}
      >
        {number}
      </button>
    </div>
  );
}
