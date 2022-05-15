import React from "react";

const ToggleSwitch = ({ checked, handleChange }) => {
  return (
    <label className="inline-block relative w-24 h-12 cursor-pointer ">
      <input
        type="checkbox"
        className="hidden peer"
        checked={checked}
        onChange={handleChange}
      />
      <span className="absolute inset-0 bg-red-500 rounded-3xl duration-500 peer-checked:bg-green-500 before:absolute before:top-2 before:left-2 before:h-8 before:w-8 before:bg-white before:rounded-full before:duration-500 peer-checked:before:translate-x-12"></span>
    </label>
  );
};

export default ToggleSwitch;
