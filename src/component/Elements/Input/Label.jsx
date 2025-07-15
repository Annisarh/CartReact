import React from "react";

const Label = ({ label = "isikan labelnya", htmlFor = "nothing" }) => {
  return (
    <label htmlFor={htmlFor} className="block font-bold text-slate-700 mb-2">
      {label}
    </label>
  );
};

export default Label;
