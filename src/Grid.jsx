export default function Grid() {
  const data = Array(10).fill(Array(10).fill(0));
  return (
    <div className="grid">
      {data.map((row, x) => (
        <div key={x}>
          {row.map((element, y) => (
            <span className="gridspan" key={y}>
              {x}*{y}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
