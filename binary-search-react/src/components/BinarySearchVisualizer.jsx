import "../styles/visualizer.css";

export function BinarySearchVisualizer({ array, target, search, predicate }) {
  const matches = array.map((inp) => predicate(inp, target));
  const found = search(array, target, predicate);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="list margin-top-bottom">
        { matches.map((match, i) => {
          return (
            <div key={i + array[i]} className={`box transitions 
                             ${match ? "active" : "inactive"} 
                             ${i === found ? "found" : ''}
                             ${i === found ? "transform-scale" : ''} `}>
              {array[i]}
            </div>
          );
        }) }
      </div>
      <p>i = {found}</p>
    </div>
  );
}
