import '../styles/combobox.css';

export function Combobox({ data, value, handleChange, open, toggleOpen, handleBlur, handleOption }) {
  return (
    <div style={{position: 'relative'}}>
      <input type="text" value={value} onChange={(e) => handleChange(e.target.value)} onClick={toggleOpen} onBlur={handleBlur} />
      {!open ? null :
        <div className="options">
          <ul style={{position: 'absolute'}}>
            { data.map((val, i) => <li key={i + val}>
                <button value={val} onMouseDown={(e) => handleOption(e, val)}>{val}</button>
              </li>
            )}
          </ul>
        </div>
      }
    </div>
  )
}
