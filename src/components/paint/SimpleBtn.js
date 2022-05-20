import React from "react";

const SimpleBtn = ({
  src,
  action,
  setActionType,
  closeAll,
  small,
  submitted,
}) => {
  return (
    <button
      disabled={submitted}
      onClick={() => {
        setActionType(action);
        closeAll();
      }}
    >
      <img className={small ? "h-12 w-12" : "h-14 w-14"} src={src} alt="" />
    </button>
  );
};

export default SimpleBtn;
