import React from "react";

export const Card = (props) => {
  const { children, styles } = props;
  return (
    <div className="hocCard-container" style={styles}>
      <div className="card">{children}</div>
    </div>
  );
};
