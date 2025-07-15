import React from "react";
import Label from "./Label";
import Input from "./Input";

const LabelInput = ({ label, htmlFor, type, name, id, placeholder, ref }) => {
  return (
    <div>
      <Label label={label} htmlFor={htmlFor} />
      <Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
};

export default LabelInput;
