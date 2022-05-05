import React from "react";

const QCSOption = ({ text, color, onChange, checked }) => {
  return (
    <label>
      <input
        type="radio"
        name="option"
        onChange={onChange}
        checked={checked}
        className={`h-6 w-6 align-middle ${
          color && (color === "green" ? "accent-green-400" : "accent-red-500")
        } `}
      />
      <span
        className={`font-bold text-lg px-4 ${
          color && (color === "green" ? "text-green-400" : "text-red-500")
        }`}
      >
        {text}
      </span>
    </label>
  );
};

export default QCSOption;
