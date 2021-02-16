import React from "react";

function Button({ wish, onRemove }) {
  return (
    <button type="button" onClick={() => onRemove(wish)}>
      Remove
    </button>
  );
}

export default Button;
