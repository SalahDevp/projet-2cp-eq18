import React from "react";

const ErrorMessage = ({ fr, msg }) => {
  return (
    <p dir={fr ? "ltr" : "rtl"} className="ml-2 text-lg text-red-500">
      {msg}
    </p>
  );
};

export default ErrorMessage;
