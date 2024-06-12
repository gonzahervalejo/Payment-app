import React from "react";

const ButtonPrimary = ({ text, className = "" }) => {
  const baseClasses = "px-16 py-6 text-white rounded-full";
  return <button className={` ${baseClasses} ${className}`}>{text}</button>;
};

export default ButtonPrimary;
