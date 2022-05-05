import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/qcs/1");
  });
  return <div>Redirecting...</div>;
};

export default Redirect;