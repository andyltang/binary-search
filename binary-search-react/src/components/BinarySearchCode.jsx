export function BinarySearchCode({ isLeftBias, checkEquality }) {
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

  return (
    <pre>
      <code>
        {isLeftBias ? `# "The largest value smaller than ${checkEquality ? "or equal to " : ''}target"`
                    : `# "The smallest value larger than ${checkEquality ? "or equal to " : ''}target"`}
        <br />
        {isLeftBias ? leftBinarySearch : rightBinarySearch}
      </code>
    </pre>
  )
}
