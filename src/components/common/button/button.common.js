import React from "react";

export const MainButton = ({ title, style, onClick }) => {
  return (
    <button {...{ onClick, style }} className="button main">
      {title}
    </button>
  );
};

export const InvertedButton = ({ title, style, onClick }) => {
  return (
    <button {...{ onClick, style }} className="button inverted">
      {title}
    </button>
  );
};

export const IconInvertedButton = ({
  Icon,
  title,
  style,
  onClick,
  disabled,
}) => {
  const disabledButton = disabled ? "disabled" : "";
  return (
    <button
      disabled={disabled}
      {...{ onClick, style }}
      className={`button inverted icon ${disabledButton}`}
    >
      {Icon} {title}
    </button>
  );
};
