import React, { Children } from "react";

const MenuBtn = ({
  src,
  action,
  setActionType,
  closeAll,
  opened,
  setOpened,
  children,
}) => {
  const childrenCount = Children.count(children);
  return (
    <div dir="rtl" className="flex flex-row justify-between ">
      <button>
        <img
          className="h-16 w-14"
          src={src}
          alt=""
          onClick={() => {
            if (action) setActionType(action);
            closeAll();
            if (!opened) setOpened(true);
          }}
        />
      </button>
      {opened && (
        <div
          style={{ width: `${3.5 * childrenCount}rem` }}
          className="p-1 px-1 rounded-xl justify-between flex items-center flex-row bg-marron
										 mt-1 mr-20 absolute   "
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default MenuBtn;
