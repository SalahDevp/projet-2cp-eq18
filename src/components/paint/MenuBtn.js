import React, { Children } from "react";

const MenuBtn = ({ src, submitted, closeAll, opened, setOpened, children }) => {
  const childrenCount = Children.count(children);
  return (
    <div dir="rtl" className="flex flex-row justify-between ">
      <button
        disabled={submitted}
        onClick={() => {
          closeAll();
          if (!opened) setOpened(true);
        }}
      >
        <img className="h-16 w-14" src={src} alt="" />
      </button>
      {opened && (
        <div
          style={{ width: `${3.5 * childrenCount}rem` }}
          className="p-1 px-1 border-2 border-violet rounded-xl justify-between flex items-center flex-row bg-marron
										 mt-1 mr-20 absolute   "
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default MenuBtn;
