import React from "react";

const Button = (props) => {
  const { text, onclick = () => {} } = props;
  return (
    <button
      className="font-semibold text-md text-slate-900 rounded px-2 py-1 cursor-pointer bg-white hover:scale-105"
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
