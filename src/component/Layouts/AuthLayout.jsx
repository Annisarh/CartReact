import React, { Children } from "react";
import Header from "../Elements/Header/Index";

const AuthLayout = (props) => {
  const { children, text } = props;
  return (
    <div>
      <Header text={text} />
      {children}
    </div>
  );
};

export default AuthLayout;
