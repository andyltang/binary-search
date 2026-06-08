import '../styles/style.css';
import { BinarySearchCode } from './BinarySearchCode';
import { BinarySearchVisualizer } from './BinarySearchVisualizer';

export function BinarySearchDisplay({ target, array, checkEquality, isLeftBias, search, predicate }) {
  return (
    <div className="grid">
      <BinarySearchCode target={target} checkEquality={checkEquality} isLeftBias={isLeftBias} />
      <BinarySearchVisualizer array={array} target={target} search={search} predicate={predicate} />
    </div>
  )
}
