import { useState, createContext } from 'react';

export const BinarySearchContext = createContext(null);

export function BinarySearchProvider({ children }) {
  const [target, setTarget] = useState(3);
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [checkEquality, setCheckEquality] = useState(false);

  return (
    <BinarySearchContext.Provider value={{target, setTarget, array, setArray, checkEquality, setCheckEquality}}>
      {children}
    </BinarySearchContext.Provider>
  )
}