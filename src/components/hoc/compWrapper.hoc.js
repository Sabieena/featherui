import React from "react";

export const CompWrapper = (props) => {
  const { children } = props;
  return (
    <div className="compwrapper-container">
      <div className="compwrapper">{children}</div>
    </div>
  );
};
