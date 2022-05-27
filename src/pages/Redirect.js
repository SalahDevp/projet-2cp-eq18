import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/menu-exo");
  });
  return <div>Redirecting...</div>;
};

export default Redirect;
