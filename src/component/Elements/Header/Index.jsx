import React from "react";

const Header = (props) => {
  const { text } = props;
  return (
    <div className="flex items-center">
      <h1 className="font-bold text-3xl tracking-wider uppercase p-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-transparent bg-clip-text">
        {text}
      </h1>
      <div className="w-[50px] bg-gradient-to-r from-fuchsia-600 to-purple-600 text-transparent h-[3px]"></div>
    </div>
  );
};

export default Header;
