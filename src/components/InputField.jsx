import React from "react";

export const InputField = ({ text, handleSubmit, setText }) => {
  return (
    <label>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>Add todo</button>
    </label>
  );
};
