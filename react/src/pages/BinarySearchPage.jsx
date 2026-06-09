import '../styles/style.css';
import { useContext } from 'react';
import { BinarySearchForm } from '../components/BinarySearchForm';
import { BinarySearchCard } from '../components/BinarySearchCard';
import { LTEQ_PREDICATE, LT_PREDICATE, GTEQ_PREDICATE, GT_PREDICATE,
         binarySearchLeft, binarySearchRight } from '../utils/BinarySearch';
import { BinarySearchContext } from '../contexts/BinarySearchContext';

export function BinarySearchPage() {
  const { checkEquality } = useContext(BinarySearchContext);
  const leftPredicate = checkEquality ? LTEQ_PREDICATE : LT_PREDICATE;
  const rightPredicate = checkEquality ? GTEQ_PREDICATE : GT_PREDICATE;

  return (
    <div className="page">
      <h1>Binary Search</h1>
      <BinarySearchForm />
      <BinarySearchCard isLeftBias={true} search={binarySearchLeft} predicate={leftPredicate} />
      <BinarySearchCard isLeftBias={false} search={binarySearchRight} predicate={rightPredicate} />
    </div>
  )
}
