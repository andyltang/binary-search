import '../styles/style.css';
import { BinarySearchCode } from './BinarySearchCode';
import { BinarySearchVisualizer } from './BinarySearchVisualizer';

export function BinarySearchCard({ isLeftBias, search, predicate }) {
  return (
    <div className="grid-col-2 margin-top-bottom">
      <BinarySearchCode isLeftBias={isLeftBias} />
      <BinarySearchVisualizer search={search} predicate={predicate} />
    </div>
  )
}
