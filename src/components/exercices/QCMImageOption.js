import React from "react";

const QCMImage = ({ imgSrc }) => {
  return (
    <li>
      <input type="checkbox" />
      <label>
        <img src={imgSrc} alt="" />
      </label>
    </li>
  );
};

export default QCMImage;
