export const LTEQ_PREDICATE = (num, target) => num <= target;
export const LT_PREDICATE =   (num, target) => num < target;
export const GTEQ_PREDICATE = (num, target) => num >= target;
export const GT_PREDICATE =   (num, target) => num > target;

export function binarySearchLeft(arr, target, predicate) {
  let l = 0;
  let r = arr.length - 1;
  
  let res = -1;
  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2);
    if (predicate(arr[m], target)) {
      l = m + 1;
      res = m;
    }
    else {
      r = m - 1;
    }
  }
  
  return res;
}

export function binarySearchRight(arr, target, predicate) {
  let l = 0;
  let r = arr.length - 1;

  let res = arr.length;
  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2);
    if (predicate(arr[m], target)) {
      r = m - 1;
      res = m;
    }
    else {
      l = m + 1;
    }
  }

  return res;
}