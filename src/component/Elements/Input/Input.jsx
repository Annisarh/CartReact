import React from "react";

const Input = ({ type = "text", name, id, placeholder, ref }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      ref={ref}
      className="font-semibold text-slate-700 px-2 py-1 w-full border border-black outline-none placeholder:opacity-60 mb-2"
      required
    />
  );
};

export default Input;
