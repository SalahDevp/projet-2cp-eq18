import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/qcm-image/1");
  });
  return <div>Redirecting...</div>;
};

export default Redirect;
