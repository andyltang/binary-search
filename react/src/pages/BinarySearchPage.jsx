import '../styles/style.css';
import { useState } from 'react';
import { BinarySearchForm } from '../components/BinarySearchForm';
import { BinarySearchCard } from '../components/BinarySearchCard';
import { LTEQ_PREDICATE, LT_PREDICATE, GTEQ_PREDICATE, GT_PREDICATE,
         binarySearchLeft, binarySearchRight } from '../utils/BinarySearch';

export function BinarySearchPage() {
  const [target, setTarget] = useState(3);
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [checkEquality, setCheckEquality] = useState(false);

  const leftPredicate = checkEquality ? LTEQ_PREDICATE : LT_PREDICATE;
  const rightPredicate = checkEquality ? GTEQ_PREDICATE : GT_PREDICATE;

  return (
    <div className="page">
      <h1>Binary Search</h1>
      <BinarySearchForm target={target} setTarget={setTarget}
                        array={array} setArray={setArray}
                        checkEquality={checkEquality} setCheckEquality={setCheckEquality}></BinarySearchForm>
      <BinarySearchCard target={target} array={array} isLeftBias={true} checkEquality={checkEquality}
                           search={binarySearchLeft} predicate={leftPredicate} />
      <BinarySearchCard target={target} array={array} isLeftBias={false} checkEquality={checkEquality}
                           search={binarySearchRight} predicate={rightPredicate} />
    </div>
  )
}
