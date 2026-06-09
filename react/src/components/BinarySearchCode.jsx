import { useContext } from 'react';
import { BinarySearchContext } from '../contexts/BinarySearchContext';

export function BinarySearchCode({ isLeftBias }) {
  const { target, checkEquality } = useContext(BinarySearchContext);
  
  const leftBinarySearch = `
  def binarySearchLeft(arr):
      l, r = 0, len(arr) - 1
      res = -1
      while l <= r:
          m = l + (r - l) // 2
          if arr[m] ${checkEquality ? '<=' : '<'} target:
              l = m + 1
              res = m
          else:
              r = m - 1
      return res`;
  
  const rightBinarySearch = `
  def binarySearchRight(arr):
    l, r = 0, len(arr) - 1
    res = len(arr)
    while l <= r:
        m = l + (r - l) // 2
        if arr[m] ${checkEquality ? '>=' : '>'} target:
            r = m - 1
            res = m
        else:
            l = m + 1
    return res`;

  const predicate = isLeftBias ? `arr[m] ${checkEquality ? "<=" : "<"} target`
                               : `arr[m] ${checkEquality ? ">=" : ">"} target`;

  const description = isLeftBias ? `# "The largest value less than ${checkEquality ? "or equal to " : ''}${ target }"`
              : `# "The smallest value greater than ${checkEquality ? "or equal to " : ''}${ target }"`
  
  return (
    <pre>
      <code>
        {`# predicate = ${ predicate }`}
        <br />
        { description }
        <br />
        {isLeftBias ? leftBinarySearch : rightBinarySearch}
      </code>
    </pre>
  )
}
