import React, { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

//used to redirect to paint in exo mode and set query params
const Grille = () => {
  const { num } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    navigate(
      `/paint?exoMode=true&qstNum=${num}&exoQstNum=${searchParams.get(
        "qstNum"
      )}&maxQst=${searchParams.get("maxQst")}&level=${searchParams.get(
        "level"
      )}&corrAns=${searchParams.get("corrAns")}`
    );
  });
  return <div></div>;
};

export default Grille;
