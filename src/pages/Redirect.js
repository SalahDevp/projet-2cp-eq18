import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/paint");
  });
  return <div>Redirecting...</div>;
};

export default Redirect;

//TODO: kayn whd l qst tsghr nav
