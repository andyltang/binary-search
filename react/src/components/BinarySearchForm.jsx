import '../styles/form.css';
import { useState } from 'react';
import { Combobox } from './Combobox';

const data = ["1, 2, 3, 4, 5",
              "1, 2, 3, 3, 3, 4, 5",
              "-2, -1, 0, 1, 2"];

function parseArray(str) {
  return str.split(",")
            .map((num) => parseInt(num))
            .filter((num) => Number.isFinite(num))
            .sort((a, b) => a - b);
}


export function BinarySearchForm({ target, setTarget, array, setArray, checkEquality, setCheckEquality }) {
  const [arrayDisplay, setArrayDisplay] = useState(array.join(", "));
  const [open, setOpen] = useState(false);

  function handleTarget(e) {
    setTarget(e.target.value);
  }

  function handleArray(val) {
    setArrayDisplay(val);
    setArray(parseArray(val));
  }

  function toggleOpen() {
    setOpen(prev => !prev);
  }

  function handleBlur(e) {
    setArray(parseArray(e.target.value));
    setOpen(false);
  }

  function handleOption(e, val) {
    e.preventDefault();
    setArrayDisplay(val);
    setArray(parseArray(val));
    setOpen(false);
  }
  
  return (
    <>
      <div className="grid-col-3 margin-top-bottom">
        <div><label>Target =</label> <input type="number" value={target} onChange={handleTarget} /></div>
        <div><label>Array =</label> <Combobox data={data} value={arrayDisplay} handleChange={handleArray}
                              open={open} toggleOpen={toggleOpen} 
                              handleBlur={handleBlur} handleOption={handleOption} /></div>
      </div>
      <div className="grid-col-2 margin-top-bottom">
        <div><input type="checkbox" checked={checkEquality}
                                    onChange={(e) => setCheckEquality(e.target.checked)} />Equality</div>
        <div>
            <label>🟩 Matches search predicate</label>
            <br />
            <label>🟥 Does not match predicate</label>
        </div>
      </div>
    </>
  )
}
