import "../styles/visualizer.css";
import { useContext } from 'react';
import { BinarySearchContext } from "../contexts/BinarySearchContext";

export function BinarySearchVisualizer({ search, predicate }) {
  const { array, target } = useContext(BinarySearchContext);
  const matches = array.map((inp) => predicate(inp, target));
  const found = search(array, target, predicate);

  return (
    <div className="flex-column">
      <div className="list margin-top-bottom">
        { matches.map((match, i) => {
          return (
            <div key={i + array[i]} className={`box transitions 
                             ${match ? "bg-green" : "bg-red"} 
                             ${i === found ? "found" : ''}
                             ${i === found ? "transform-scale" : ''} `}>
              {array[i]}
            </div>
          );
        }) }
      </div>
      <pre className="font-16px">
        <code>
          Results <br />
          --- <br />
          i = {found} <br />
          arr[i] = {found >= 0 && found < array.length ? array[found] : <span className="red">INDEX OOB</span>}
        </code>
      </pre>
    </div>
  );
}
