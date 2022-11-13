import React from "react";

function Toggle(props) {
  const {
    text,
    size = "default",
    checked,
   
    onChange,
    offstyle = "btn-danger",
    onstyle = "btn-success"
  } = props;

  let displayStyle = checked ? onstyle : offstyle;
  return (
    <>
      <label>
        <span className={`${size} switch-wrapper`}>
          <input
            type="checkbox"
            checked={checked}
            
            onChange={e => onChange(e)}
          />
          <span className={`${displayStyle} switch`}>
            <span className="switch-handle" />
          </span>
        </span>
        <span className="switch-label">{text}</span>
      </label>
    </>
  );
}

export default Toggle;
