import Nav from "components/Nav";
import sortir from "../components/nouveau-protype-component/sortir.png";
import submitBtn from "assets/exercices/submitBtn.png";
import greenArrow from "assets/exercices/green-arrow.png";
import redArrow from "assets/exercices/red-arrow.png";
import QCMImageOption from "components/exercices/QCMImageOption";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
//images
import img1 from "assets/exercices/tmp/img1.png";
import img2 from "assets/exercices/tmp/img2.png";
import img3 from "assets/exercices/tmp/img3.png";
import img4 from "assets/exercices/tmp/img4.png";
import img5 from "assets/exercices/tmp/img5.png";
import img6 from "assets/exercices/tmp/img6.png";

const areSetsEqual = (a, b) =>
  a.size === b.size && [...a].every((value) => b.has(value));

const QCMImage = () => {
  const maxQuestions = 1;
  //routing
  const { num: questionNum } = useParams();
  const navigate = useNavigate();
  //states
  const [question, setQuestion] = useState("");
  const [imageSrc, setImageSrc] = useState();
  const [options, setOptions] = useState([]);
  const [rightOptions, setRightOptions] = useState(new Set());
  const [checkedOptions, setCheckedOptions] = useState(new Set());
  const [submitted, setSubmitted] = useState(false);
  //funcs
  const handleChange = () => {};
  const handleNext = () => {};
  const handleSubmit = () => {};
  return (
    <div className="bg-beige relative h-screen w-screen flex overflow-hidden">
      <img
        className="absolute top-9 right-10 h-11 w-11 "
        src={sortir}
        alt="sortir"
      />
      <Nav pathAvant={"/NMenu"} />
      <div
        className={`relative h-auto flex-grow border-2 rounded-3xl border-jeune mx-24 mt-20 mb-10 pb-6 pt-7 flex flex-col items-center ${
          !submitted
            ? "bg-white"
            : areSetsEqual(checkedOptions, rightOptions)
            ? "bg-green-200"
            : "bg-red-200"
        }`}
      >
        <span className="font-bold text-2xl absolute top-1 right-4">{`${questionNum}/${maxQuestions}`}</span>
        <div className="text-2xl font-bold text-center py-4">
          Quelles figures représnetent une symétrie ?
        </div>

        <ul className="flex-grow w-4/5 grid grid-cols-3 place-items-center z-10">
          <QCMImageOption imgSrc={img1} />
          <QCMImageOption imgSrc={img2} />
          <QCMImageOption imgSrc={img3} />
          <QCMImageOption imgSrc={img4} />
          <QCMImageOption imgSrc={img5} />
          <QCMImageOption imgSrc={img6} />
        </ul>
        {submitted ? (
          <button className="translate-x-60" onClick={handleNext}>
            <img
              src={
                areSetsEqual(checkedOptions, rightOptions)
                  ? greenArrow
                  : redArrow
              }
              alt=""
              className="h-14"
            />
          </button>
        ) : (
          <button className="translate-x-60" onClick={handleSubmit}>
            <img className="h-14 w-14" src={submitBtn} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default QCMImage;
