import Nav from "components/Nav";
import sortir from "../components/nouveau-protype-component/sortir.png";
import submitBtn from "assets/exercices/submitBtn.png";
import greenArrow from "assets/exercices/green-arrow.png";
import redArrow from "assets/exercices/red-arrow.png";
import ImageQCMOption from "components/exercices/ImageQCMOption";
import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
//translation
import { useTranslation } from "react-i18next";

const areSetsEqual = (a, b) =>
  a.size === b.size && [...a].every((value) => b.has(value));

const ImageQCM = () => {
  const maxQuestions = 1;
  //audio
  const correctAudio = useMemo(
    () => new Audio("./audio/correct-answer.wav"),
    []
  );
  const wrongAudio = useMemo(() => new Audio("./audio/wrong-answer.mp3"), []);
  //routing
  const { num: questionNum } = useParams();
  const navigate = useNavigate();
  //states
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [rightOptions, setRightOptions] = useState(new Set());
  const [checkedOptions, setCheckedOptions] = useState(new Set());
  const [submitted, setSubmitted] = useState(false);
  //translation
  const { i18n } = useTranslation();
  //funcs
  const handleChange = (optionNum) => {
    //if the form is submitted exit (to prevent user form changing answer)
    if (submitted) return;
    //if box is checked uncheck it else check it
    if (checkedOptions.has(optionNum)) checkedOptions.delete(optionNum);
    else checkedOptions.add(optionNum);
    setCheckedOptions(new Set([...checkedOptions]));
  };

  const handleSubmit = () => {
    //dont submit if user hasn't checked any box
    if (checkedOptions.size === 0) return;
    //set the right options color to green
    for (let optNum of rightOptions) options[optNum - 1].color = "green";
    //if the selected opt is wrong we set its color to red
    for (let optNum of checkedOptions) {
      if (!rightOptions.has(optNum)) options[optNum - 1].color = "red";
    }
    //submit sound
    if (areSetsEqual(checkedOptions, rightOptions)) {
      correctAudio.play();
    } else wrongAudio.play();
    //set states
    setOptions([...options]);
    setSubmitted(true);
  };

  const handleNext = () => {
    const nextQuestion = parseInt(questionNum) + 1;
    navigate(`/image-qcm/${nextQuestion <= maxQuestions ? nextQuestion : 1}`);
  };
  //
  useEffect(() => {
    let questionObj;
    (async () => {
      try {
        questionObj = await window.electronAPI.getImageQCMQuestion(
          questionNum,
          i18n.language
        );
        setQuestion(questionObj.question);
        setOptions(
          questionObj.optionsSrc.map((src) => ({
            src,
          }))
        );
        setRightOptions(new Set(questionObj.rightOptions));
        setCheckedOptions(new Set());
        setSubmitted(false);
      } catch (e) {
        console.error(e);
        //TODO: navigate to exercices menu
      }
    })();
  }, [questionNum, i18n.language]);

  return (
    <div className="bg-beige relative h-screen w-screen flex overflow-hidden">
      <img
        className="absolute top-9 right-10 h-11 w-11 "
        src={sortir}
        alt="sortir"
      />
      <Nav pathAvant={"/NMenu"} />
      <div
        className={`relative h-auto flex-grow border-2 rounded-3xl border-jeune mx-24 mt-16 mb-8 pb-6 pt-7 flex flex-col items-center ${
          !submitted
            ? "bg-white"
            : areSetsEqual(checkedOptions, rightOptions)
            ? "bg-green-200"
            : "bg-red-200"
        }`}
      >
        <span className="font-bold text-2xl absolute top-1 right-4">{`${questionNum}/${maxQuestions}`}</span>
        <div className="text-2xl font-bold text-center py-4">{question}</div>

        <ul className="h-98 w-4/5 grid grid-cols-3 gap-2 place-items-center z-10">
          {options.map((opt, ind) => (
            <ImageQCMOption
              imgSrc={opt.src}
              color={opt.color}
              submitted={submitted}
              key={opt.src}
              id={ind}
              onChange={() => handleChange(ind + 1)}
              checked={checkedOptions.has(ind + 1)}
            />
          ))}
        </ul>
        {submitted ? (
          <button className="translate-x-96 mt-3" onClick={handleNext}>
            <img
              src={
                areSetsEqual(checkedOptions, rightOptions)
                  ? greenArrow
                  : redArrow
              }
              alt=""
              className="h-12"
            />
          </button>
        ) : (
          <button className="translate-x-96 mt-3" onClick={handleSubmit}>
            <img className="h-12 w-12" src={submitBtn} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageQCM;
